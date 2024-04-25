import { ReactElement } from "react"

import HeroIllustration from "@/components/Hero/HeroIllustration"
import HeroText from "@/components/Hero/HeroText"
import HeroIcons from "@/components/Hero/HeroIcons"
import TechStack from "@/components/TechStack"

const Hero = (): ReactElement => {
  return (
    <section id="hero" className="min-h-[100vh - 72px] grid place-content-center">
      <div className="flex gap-4">
        <div className="w-1/2">
          <HeroText />
          <HeroIcons />
        </div>
        <HeroIllustration />
      </div>
        {/* TODO: Make mobile text to component */}
        <p className="md:hidden container text-sm mx-auto text-justify mt-6">
          {`Hello 👋 My name is Tomáš and I'm a frontend developer from Prague, currently working on fintech projects for akcenta.digital`}
        </p>
        <p className="md:hidden container text-sm mx-auto text-justify mt-3">
          {`Do I know everything? Far from it. However, I have more than 10 years of experience in technical positions, 
            and if you're looking for a team member with the potential for rapid growth and the ability to learn constantly, keep reading.`
          }
        </p>
      <TechStack />
    </section>
  )
}

export default Hero