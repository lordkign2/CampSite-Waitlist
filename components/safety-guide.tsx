"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function SafetyGuide() {
  const checklist = [
    "Ask about water source (borehole/tank) and schedule",
    "Check for prepaid meter or clear billing terms",
    "Inspect door/window locks and fence/gate",
    "Confirm distance to Main Gate or your lecture halls",
    "Review payment terms (per semester, deposit)",
  ]
  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border overflow-hidden">
        <div className="relative h-60 w-full">
          <Image
            alt="Gidan Kwano housing types preview"
            src={"/placeholder.svg?height=240&width=560&query=gidan%20kwano%20student%20housing%20types%20grid"}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">Know what to expect</h3>
          <p className="mt-1 text-sm text-neutral-600">
            See photos of common room types: self‑contain, 1‑bedroom, and shared rooms—so you can compare before
            visiting.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border p-5 bg-white">
        <h3 className="font-semibold">Checklist before renting</h3>
        <ul className="mt-3 space-y-2">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
              <span className="text-sm text-neutral-700">{item}</span>
            </li>
          ))}
        </ul>
        <a href="#waitlist" className="mt-4 inline-block text-sm text-emerald-700 hover:underline">
          Get the full guide when we launch →
        </a>
      </div>
    </div>
  )
}
