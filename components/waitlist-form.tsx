"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [role, setRole] = useState<"student" | "agent">("student")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Email</label>
          <Input
            required
            type="email"
            placeholder="you@st.futminna.edu.ng"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="mt-1"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">I am a</label>
          <div className="mt-1 flex gap-2">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`rounded-full border px-3 py-1.5 text-sm ${role === "student" ? "bg-emerald-600 text-white border-emerald-600" : "hover:bg-neutral-50"}`}
              aria-pressed={role === "student"}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole("agent")}
              className={`rounded-full border px-3 py-1.5 text-sm ${role === "agent" ? "bg-emerald-600 text-white border-emerald-600" : "hover:bg-neutral-50"}`}
              aria-pressed={role === "agent"}
            >
              Agent/Landlord
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <Button
          type="submit"
          className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Join Waitlist"}
        </Button>
      </div>
      {status === "success" && (
        <p className="sm:col-span-2 text-sm text-emerald-700">Thanks! You’re on the list. We’ll reach out soon.</p>
      )}
      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
