import { Building2 } from "lucide-react"

export function Brand(props: { size?: "sm" | "md" | "lg" }) {
  const { size = "md" } = props
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-xl"
  const iconSize = size === "sm" ? "h-5 w-5" : size === "lg" ? "h-7 w-7" : "h-6 w-6"

  return (
    <a href="#" className="inline-flex items-center gap-2 font-semibold">
      <span className={`inline-flex items-center justify-center rounded-full bg-emerald-500 text-white ${iconSize}`}>
        <Building2 className="h-4 w-4" />
      </span>
      <span className={`${textSize}`}>
        Camp<span className="text-emerald-600">Site</span>
      </span>
    </a>
  )
}
