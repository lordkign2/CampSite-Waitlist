"use client"

import { ShieldCheck, Star, FlagTriangleRight, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function TrustSection() {
  const items = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
      title: "Agent Verification",
      desc: "Upload NIN/CAC + utility bill. CampSite partnership badge when applicable.",
    },
    {
      icon: <Star className="h-5 w-5 text-emerald-600" />,
      title: "Student Reviews",
      desc: "“Reliable water”, “1 min walk to ABT Hall”, “Prepaid meter”",
    },
    {
      icon: <FlagTriangleRight className="h-5 w-5 text-emerald-600" />,
      title: "Red Flags",
      desc: "Flag suspicious listings and agents; transparent moderation.",
    },
    {
      icon: <Clock className="h-5 w-5 text-emerald-600" />,
      title: "Last Updated",
      desc: "Listings clearly show last update time to reduce stale data.",
    },
  ]
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <motion.div key={it.title} whileHover={{ y: -2 }} className="rounded-2xl border p-5 bg-white">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">{it.icon}</div>
          <h3 className="mt-3 font-semibold">{it.title}</h3>
          <p className="mt-1 text-sm text-neutral-600">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
