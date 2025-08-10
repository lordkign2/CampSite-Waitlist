"use client"

import { useEffect, useState } from "react"

export function PWARegister() {
  const [updateReady, setUpdateReady] = useState<ServiceWorkerRegistration | null>(null)
  const [installing, setInstalling] = useState(false)

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return

    const onLoad = () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          // Listen for updates to the SW
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing
            if (!newWorker) return
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                // A new version is available
                setUpdateReady(registration)
              }
            })
          })
        })
        .catch((err) => {
          console.warn("SW registration failed:", err)
        })
    }

    window.addEventListener("load", onLoad)
    return () => window.removeEventListener("load", onLoad)
  }, [])

  useEffect(() => {
    // Reload the page when the controller has changed after skip waiting
    const onControllerChange = () => {
      window.location.reload()
    }
    navigator.serviceWorker?.addEventListener?.("controllerchange", onControllerChange)
    return () => {
      navigator.serviceWorker?.removeEventListener?.("controllerchange", onControllerChange)
    }
  }, [])

  function activateUpdate() {
    if (!updateReady) return
    setInstalling(true)
    // Tell the waiting SW to skip waiting
    if (updateReady.waiting) {
      updateReady.waiting.postMessage({ type: "SKIP_WAITING" })
    }
  }

  if (!updateReady) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-white px-4 py-2 shadow-lg">
      <div className="flex items-center gap-3 text-sm">
        <span>New version available</span>
        <button
          onClick={activateUpdate}
          disabled={installing}
          className="rounded-full bg-emerald-600 px-3 py-1 text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {installing ? "Updating…" : "Update"}
        </button>
      </div>
    </div>
  )
}
