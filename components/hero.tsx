"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { PhoneMock } from "@/components/phone-mock"
import { motion } from "framer-motion"
import { ShieldCheck, MapPin, MessageCircle, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Verified off‑campus housing for Nigerians
          </motion.h1>
          <motion.p
            className="mt-4 text-neutral-700"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Find safe, nearby, and affordable apartments. Avoid scams. Chat with verified agents and see real-time
            availability—built for students on small phones.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button asChild className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
              <a href="#waitlist">Join the waitlist</a>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-transparent">
              <a href="#listings">Explore listings</a>
            </Button>
          </motion.div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-700">
            <HeroPoint icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="Agent verification (KYC)" />
            <HeroPoint icon={<MapPin className="h-4 w-4 text-emerald-600" />} text="Gidan Kwano landmarks" />
            <HeroPoint icon={<MessageCircle className="h-4 w-4 text-emerald-600" />} text="Chat with agents" />
            <HeroPoint icon={<Sparkles className="h-4 w-4 text-emerald-600" />} text="Smart filters (time to gate)" />
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-200 px-3 py-1 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            Pilot launching in Gidan Kwano
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto w-full max-w-sm"
          >
            <PhoneMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HeroPoint(props: { icon: React.ReactNode; text: string }) {
  return (
    <li className="inline-flex items-center gap-2">
      {props.icon}
      <span>{props.text}</span>
    </li>
  )
}
