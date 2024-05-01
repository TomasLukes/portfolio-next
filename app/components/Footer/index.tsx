import { ReactElement } from "react"
import Link from "next/link"

import Icons from "@/components/Icons"

const Footer = (): ReactElement => {
  return (
    <footer className="w-full bg-neutral-800">
      <div className="flex items-center justify-between py-4 md:py-6 px-4 md:px-6 lg:px-8">
        <p className="text-xs md:text-sm">
          Created by <span className="font-semibold">Tomas Lukes</span> 2024
        </p>
        <div className="flex gap-2 md:gap-6">
          <Link href="https://www.linkedin.com/in/tomas-lukes" rel="noreferrer" target="_blank" aria-label="See more at my Linkedin">
            <Icons.socials.linkedin />
          </Link>
          <Link href="https://github.com/TomasLukes" rel="noreferrer" target="_blank" aria-label="See more at my Github">
            <Icons.socials.github className="w-6 md:w-8 hover:fill-yellow-500 hover:scale-105" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer