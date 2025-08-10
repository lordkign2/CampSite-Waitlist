"use client"

import type React from "react"

import { Home, Search, MessagesSquare, UserRound, MapPin, Heart, Wifi, Droplets, Bolt } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function PhoneMock(props: { title?: string }) {
  const { title = "Nearby rooms" } = props
  return (
    <div
      aria-label="App preview"
      className="relative mx-auto aspect-[9/19] w-full max-w-[320px] rounded-[2rem] border bg-white shadow-xl overflow-hidden"
    >
      {/* Top bar */}
      <div className="h-10 flex items-center justify-center border-b text-sm font-medium">CampSite</div>

      {/* Content */}
      <div className="p-3 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-full border bg-neutral-50 px-3 py-2 text-xs text-neutral-600">
            Search: "3 mins bike to class"
          </div>
          <button className="rounded-full border px-3 py-2 text-xs">Filters</button>
        </div>

        {/* Card 1 */}
        <motion.div whileHover={{ scale: 1.01 }} className="rounded-xl border overflow-hidden">
          <div className="relative h-28 w-full">
            <Image
              alt="Self contain room sample"
              src={"/placeholder.svg?height=112&width=320&query=bright%20student%20room%20in%20gidan%20kwano"}
              fill
              className="object-cover"
            />
            <div className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px]">
              <MapPin className="h-3 w-3 text-emerald-600" />4 mins walk to Main Gate
            </div>
            <button className="absolute right-2 top-2 rounded-full bg-white/90 p-1" aria-label="Bookmark">
              <Heart className="h-4 w-4" />
            </button>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">₦120,000 / year</p>
              <span className="rounded-full bg-emerald-50 text-emerald-700 text-[10px] px-2 py-1">Available now</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <Tag icon={<Droplets className="h-3 w-3" />} text="Water tank" />
              <Tag icon={<Bolt className="h-3 w-3" />} text="Prepaid meter" />
              <Tag icon={<Wifi className="h-3 w-3" />} text="Starlink" />
            </div>
          </div>
        </motion.div>

        {/* Chat preview */}
        <div className="rounded-xl border p-3">
          <p className="text-xs font-medium">Chat with Agent Musa</p>
          <div className="mt-2 w-32 h-6 rounded-full bg-neutral-100 animate-pulse" aria-label="Typing indicator" />
        </div>
      </div>

      {/* Bottom nav */}
      <nav
        aria-label="App bottom navigation"
        className="absolute bottom-0 left-0 right-0 border-t bg-white/95 backdrop-blur"
      >
        <ul className="grid grid-cols-4 text-xs">
          <li className="flex flex-col items-center py-2 text-emerald-600">
            <Home className="h-5 w-5" />
            Home
          </li>
          <li className="flex flex-col items-center py-2 text-neutral-600">
            <Search className="h-5 w-5" />
            Explore
          </li>
          <li className="flex flex-col items-center py-2 text-neutral-600">
            <MessagesSquare className="h-5 w-5" />
            Chat
          </li>
          <li className="flex flex-col items-center py-2 text-neutral-600">
            <UserRound className="h-5 w-5" />
            Profile
          </li>
        </ul>
      </nav>
    </div>
  )
}

function Tag(props: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 text-neutral-700 px-2 py-0.5 text-[10px]">
      {props.icon}
      {props.text}
    </span>
  )
}
