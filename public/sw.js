const VERSION = "v1.0.0"
const PRECACHE = `ks-precache-${VERSION}`
const RUNTIME = `ks-runtime-${VERSION}`

const PRECACHE_URLS = [
  "/",
  "/offline.html",
  "/manifest.webmanifest",
  "/favicon-32.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/apple-touch-icon-180.png",
  "/abstract-geometric-shapes.png",
]

// Install: pre-cache essential assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  )
})

// Activate: clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => ![PRECACHE, RUNTIME].includes(k)).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

// Messaging: allow skipping waiting from the app
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

function isNavigationRequest(request) {
  return (
    request.mode === "navigate" || (request.method === "GET" && request.headers.get("accept")?.includes("text/html"))
  )
}

// Fetch: runtime caching strategies
self.addEventListener("fetch", (event) => {
  const { request } = event

  // Ignore non-GET and cross-origin
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return
  }

  // Navigation requests: network-first with offline fallback
  if (isNavigationRequest(request)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(RUNTIME).then((cache) => cache.put(request, copy))
          return response
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/offline.html"))),
    )
    return
  }

  // Static assets (images, styles, scripts): stale-while-revalidate
  const dest = request.destination
  if (["image", "style", "script", "font"].includes(dest)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request)
          .then((response) => {
            const copy = response.clone()
            caches.open(RUNTIME).then((cache) => cache.put(request, copy))
            return response
          })
          .catch(() => cached) // If network fails, use cache
        return cached || networkFetch
      }),
    )
    return
  }

  // Default: try cache, then network
  event.respondWith(caches.match(request).then((cached) => cached || fetch(request)))
})
