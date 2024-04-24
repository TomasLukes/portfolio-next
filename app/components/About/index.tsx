import { ReactElement } from "react"

import Timeline from "@/components/Timeline"
import Bio from "@/components/Bio"

const About = (): ReactElement => {
  return (
    <section id="about" className="pt-12 md:pt-28">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="md:w-3/5 lg:w-2/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
            O mně
          </h2>
          <p className="md:w-3/5 text-neutral-200 pb-2 md:pb-4">
            Již přes rok se intenzivně věnuji webovému vývoji. Mám zkušenosti s celou řadou technologií, včetně Reactu, Next.js, Typescriptu, Tailwind CSS, REST API, headless CMS a mnoha dalších. 
          </p>
          <p className="md:w-3/5 text-neutral-200 pb-8 md:pb-12">
          Umím všechno? Zdaleka ne. Ale neustále se snažím vzdělávat a posouvat o kus dále, tak abych vždy doručil stránky, které budou zákazníci i návštěvníci rádi používat.
          </p>
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