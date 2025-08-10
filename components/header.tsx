"use client"

import { Brand } from "@/components/brand"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Brand />
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <a className="hover:text-emerald-700" href="#students">
                Students
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-700" href="#agents">
                Agents
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-700" href="#map">
                Map
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-700" href="#trust">
                Trust
              </a>
            </li>
            <li>
              <a className="hover:text-emerald-700" href="#safety">
                Safety
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <Button asChild className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
            <a href="#waitlist">Get early access</a>
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-lg border hover:bg-neutral-50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <nav aria-label="Mobile">
            <ul className="px-4 py-3 space-y-3 text-sm">
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-neutral-50"
                  href="#students"
                  onClick={() => setOpen(false)}
                >
                  Students
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-neutral-50"
                  href="#agents"
                  onClick={() => setOpen(false)}
                >
                  Agents
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-neutral-50"
                  href="#map"
                  onClick={() => setOpen(false)}
                >
                  Map
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-neutral-50"
                  href="#trust"
                  onClick={() => setOpen(false)}
                >
                  Trust
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-neutral-50"
                  href="#safety"
                  onClick={() => setOpen(false)}
                >
                  Safety
                </a>
              </li>
              <li>
                <a
                  className="block rounded-lg px-3 py-2 bg-emerald-600 text-white text-center"
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                >
                  Get early access
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
