import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { PWARegister } from "@/components/pwa-register"

export const metadata: Metadata = {
  title: "KEAgents – Housing",
  description: "Verified apartments for Students and workers around Nigeria.",
  generator: "LDS",
  manifest: "/manifest.webmanifest",
  themeColor: "#10B981",
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/icons/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {/* Registers the service worker and handles updates */}
        <PWARegister />
        {children}
      </body>
    </html>
  )
}
