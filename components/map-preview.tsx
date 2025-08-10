"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

type Pin = {
  label: string
  // Percent positions over the background image
  left: string
  top: string
  color?: string
}

const pins: Pin[] = [
  { label: "Main Gate", left: "20%", top: "30%", color: "#10B981" },
  { label: "Engineering Complex", left: "65%", top: "35%", color: "#10B981" },
  { label: "Shuttle Point", left: "45%", top: "55%", color: "#F59E0B" },
  { label: "BUKA Zone", left: "30%", top: "70%", color: "#F59E0B" },
]

export function MapPreview() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border bg-white">
      <div className="relative h-[360px] w-full">
        <Image
          alt="Gidan Kwano area map preview"
          src={
            "/placeholder.svg?height=360&width=1120&query=abstract%20gis%20map%20of%20gidan%20kwano%20with%20roads%20and%20landmarks"
          }
          fill
          className="object-cover"
          priority
        />
        {pins.map((pin, idx) => (
          <motion.div
            key={pin.label}
            className="absolute"
            style={{ left: pin.left, top: pin.top, transform: "translate(-50%, -100%)" }}
            initial={{ y: -8, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 * idx, duration: 0.4 }}
          >
            <motion.div whileHover={{ y: -4 }} className="group relative">
              <div className="rounded-full p-1.5 shadow-md bg-white" aria-label={pin.label} title={pin.label}>
                <MapPin className="h-5 w-5" style={{ color: pin.color ?? "#10B981" }} />
              </div>
              <div className="absolute left-1/2 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2 py-1 text-xs shadow group-hover:opacity-100 opacity-0 transition">
                {pin.label}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 p-4 text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Campus landmarks
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
          Student spots
        </span>
        <span className="ml-auto text-neutral-500 text-xs">Preview only</span>
      </div>
    </div>
  )
}
