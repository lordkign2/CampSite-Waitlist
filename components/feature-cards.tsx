"use client"

import { motion } from "framer-motion"
import {
  Filter,
  MapPin,
  Heart,
  Calendar,
  MessagesSquare,
  Star,
  Upload,
  FileCheck2,
  BarChart3,
  ShieldCheck,
} from "lucide-react"

type Audience = "students" | "agents"

export function FeatureCards(props: { audience?: Audience }) {
  const { audience = "students" } = props
  const items =
    audience === "students/workers"
      ? [
          {
            title: "Smart Filters",
            desc: 'Price (₦), furnished, water, "3 mins bike"',
            icon: <Filter className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Map & Distance",
            desc: "Main Gate, BUKA, Shuttle points proximity",
            icon: <MapPin className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Bookmarks",
            desc: "Save rooms you like for later",
            icon: <Heart className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Availability Calendar",
            desc: "Now or by semester",
            icon: <Calendar className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Chat with Agents",
            desc: "Verified and responsive",
            icon: <MessagesSquare className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Student Reviews",
            desc: "Water, power, distance feedback",
            icon: <Star className="h-5 w-5 text-emerald-600" />,
          },
        ]
      : [
          {
            title: "Easy Listing Tool",
            desc: "Photos, rent, terms, room tags",
            icon: <Upload className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Student-Safe Checklist",
            desc: "Water, prepaid meter, fencing",
            icon: <FileCheck2 className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Dashboard",
            desc: "Interest, views, update availability",
            icon: <BarChart3 className="h-5 w-5 text-emerald-600" />,
          },
          {
            title: "Verification",
            desc: "KYC + FUTMINNA partnership badge",
            icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
          },
        ]

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <motion.div key={it.title} whileHover={{ y: -2, scale: 1.01 }} className="rounded-2xl border p-5 bg-white">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">{it.icon}</div>
          <h3 className="mt-3 font-semibold">{it.title}</h3>
          <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
