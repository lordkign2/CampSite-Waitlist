import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { MapPreview } from "@/components/map-preview"
import { ListingsPreview } from "@/components/listings-preview"
import { TrustSection } from "@/components/trust-section"
import { SafetyGuide } from "@/components/safety-guide"
import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />

        <section aria-label="Highlights" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatChip label="Verified Agents" value="KYC + Badges" />
            <StatChip label="Localized to" value="Nigerians" />
            <StatChip label="Built for" value="Nigerians" />
            <StatChip label="Mobile-first" value="Bottom Nav UX" />
          </div>
        </section>

        <section id="students" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <SectionHeader
            title="Made for Nigerians"
            subtitle="Find safe, nearby, and affordable off-campus rooms or apartments with smart filters and real-time availability."
          />
          <FeatureCards audience="students, workers" />
        </section>

        <section id="map" className="bg-neutral-50">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <SectionHeader
              title="Nigeria Map Preview"
              subtitle="See listings near key landmarks: Main Gate, Engineering Complex, Shuttle Points, and BUKA zones."
            />
            <MapPreview />
          </div>
        </section>

        <section id="listings" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <SectionHeader
            title="Explore Sample Listings"
            subtitle="Glance at rent, walking/bike time to campus, water, power, and safety tags."
          />
          <ListingsPreview />
          <div className="mt-8 flex justify-center">
            <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
              See more listings <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="agents" className="bg-neutral-50">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <SectionHeader
              title="Tools for Agents & Landlords"
              subtitle="List rooms in minutes, update availability, and build trust with verification."
            />
            <FeatureCards audience="agents" />
          </div>
        </section>

        <section id="trust" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <SectionHeader
            title="Built for Trust and Safety"
            subtitle="Agent verification, student reviews, red flags, and clear last updated times."
          />
          <TrustSection />
        </section>

        <section id="safety" className="bg-neutral-50">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <SectionHeader
              title="Student Housing Safety Guide"
              subtitle="What to check before renting in Gidan Kwano—learn from seniors and local knowledge."
            />
            <SafetyGuide />
          </div>
        </section>

        <section id="waitlist" className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="rounded-2xl border p-6 sm:p-8 bg-gradient-to-br from-emerald-50 to-amber-50">
            <SectionHeader
              title="Get Early Access"
              subtitle="Join the waitlist to be the first to try the platform when we launch in Gidan Kwano."
              center
            />
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            {"© "}
            {new Date().getFullYear()} KEAgents. Built for Nigeria students/workers.
          </p>
          <nav aria-label="Footer">
            <ul className="flex gap-6 text-sm text-neutral-600">
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
                <a className="hover:text-emerald-700" href="#trust">
                  Trust
                </a>
              </li>
              <li>
                <a className="hover:text-emerald-700" href="#safety">
                  Safety
                </a>
              </li>
              <li>
                <a className="hover:text-emerald-700" href="#waitlist">
                  Waitlist
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function StatChip(props: { label: string; value: string }) {
  const { label, value } = props
  return (
    <div className="rounded-xl border p-4">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  )
}

function SectionHeader(props: { title: string; subtitle?: string; center?: boolean }) {
  const { title, subtitle, center = false } = props
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-2 text-neutral-600">{subtitle}</p> : null}
    </div>
  )
}
