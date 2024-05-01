import { ReactElement } from "react"
import Link from "next/link"

import Icons from "@/components/Icons"

const HeroIcons = (): ReactElement => {
  return (
    <div className="flex gap-4 mb-3 md:my-4 md:gap-6">
        <Link href="https://www.linkedin.com/in/tomas-lukes" rel="noreferrer" target="_blank" aria-label="See more at my Linekdin">
            <Icons.socials.linkedin />
        </Link>
        <Link href="https://github.com/TomasLukes" rel="noreferrer" target="_blank" aria-label="See more at my Github">
            <Icons.socials.github className="w-6 md:w-8 hover:fill-yellow-500 hover:scale-105" />
        </Link>
        <Link href="mailto:lukest@seznam.cz" target="_blank" aria-label="Contact me at my email address">
            <Icons.socials.email className="w-6 md:w-8 hover:fill-yellow-500 hover:scale-105" />
        </Link>        
    </div>
  )
}

export default HeroIcons