import { ReactElement } from "react"

import AboutIntro from "@/components/About/AboutIntro"
import Bio from "@/components/Bio"
import Timeline from "@/components/Timeline"

const About = (): ReactElement => {
  return (
    <section id="about" className="pt-12 md:pt-28">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="md:w-3/5 lg:w-2/3">
          <AboutIntro />
          <Bio />
        </div>
        <div className="md:w-2/5 lg:w-1/3 pt-12">
          <Timeline />
        </div>
      </div>
    </section> 
  )
}

export default About