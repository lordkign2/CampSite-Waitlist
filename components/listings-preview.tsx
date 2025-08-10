"use client"

import type React from "react"

import Image from "next/image"
import { MapPin, Droplets, Bolt, ShieldCheck, Bike, Footprints } from "lucide-react"
import { motion } from "framer-motion"

type Listing = {
  id: string
  title: string
  price: string
  distance: string
  distanceMode: "bike" | "walk"
  tags: string[]
  updated: string
  deal?: string
}

const listings: Listing[] = [
  {
    id: "1",
    title: "Self-contain by Samtech",
    price: "₦120,000 / yr",
    distance: "3 mins",
    distanceMode: "bike",
    tags: ["Water Tank", "Prepaid", "Fence & Gate"],
    updated: "2 days ago",
    deal: "₦5k off for first-time tenants",
  },
  {
    id: "2",
    title: "1-bedroom near Main Gate",
    price: "₦180,000 / yr",
    distance: "7 mins",
    distanceMode: "walk",
    tags: ["Close to Borehole", "Starlink"],
    updated: "today",
  },
  {
    id: "3",
    title: "Shared room, Eng. Complex",
    price: "₦60,000 / yr",
    distance: "5 mins",
    distanceMode: "bike",
    tags: ["Accepts per year", "Good lighting"],
    updated: "5 hours ago",
    deal: "₦60k upfront for 1 year",
  },
]

export function ListingsPreview() {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((l, idx) => (
        <motion.article
          key={l.id}
          whileHover={{ y: -3, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-2xl border overflow-hidden bg-white"
        >
          <div className="relative h-40 w-full">
            <Image
              alt={`${l.title} photo`}
              src={`/abstract-geometric-shapes.png?height=160&width=480&query=${encodeURIComponent(l.title + " room photo in gidan kwano")}`}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs">
              <MapPin className="h-4 w-4 text-emerald-600" />
              {l.distance} {l.distanceMode === "bike" ? "okada" : "walk"}
            </div>
            {l.deal ? (
              <div className="absolute right-2 top-2 rounded-full bg-amber-200 px-2 py-1 text-[11px] font-medium">
                {l.deal}
              </div>
            ) : null}
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{l.title}</h3>
            <p className="mt-1 text-sm">{l.price}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {l.tags.includes("Water Tank") && <Chip icon={<Droplets className="h-3 w-3" />} text="Water Tank" />}
              {l.tags.includes("Prepaid") && <Chip icon={<Bolt className="h-3 w-3" />} text="Prepaid" />}
              {l.tags.includes("Fence & Gate") && (
                <Chip icon={<ShieldCheck className="h-3 w-3" />} text="Fence & Gate" />
              )}
              {l.tags.includes("Close to Borehole") && <Chip text="Close to Borehole" />}
              {l.tags.includes("Starlink") && <Chip text="Starlink" />}
              {l.tags.includes("Accepts per semester") && <Chip text="Per semester" />}
              {l.tags.includes("Good lighting") && <Chip text="Good lighting" />}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-neutral-600">
              <span className="inline-flex items-center gap-1">
                {l.distanceMode === "bike" ? (
                  <Bike className="h-3.5 w-3.5 text-emerald-600" />
                ) : (
                  <Footprints className="h-3.5 w-3.5 text-emerald-600" />
                )}
                Estimator
              </span>
              <span>Last updated {l.updated}</span>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function Chip(props: { text: string; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 text-neutral-700 px-2 py-0.5 text-[10px]">
      {props.icon}
      {props.text}
    </span>
  )
}
