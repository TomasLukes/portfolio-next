import { ReactElement } from "react"

import ProjectCardLg from "@/components/ProjectCard/ProjectCardLg"

const Projects = ():ReactElement => {
  return (
    <section id="projects" className="pt-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
          Projekty
        </h2>
        <p className="md:w-4/5 lg:w-3/5 text-left md:text-justify mb-6 md:mb-12 text-neutral-200">
          Zde je ukázka několika projektů, na kterých jsem měl možnost pracovat. 
          Vždy používám nejmodernější tech stack, kladu důraz na kvalitu kódu, tak aby web sloužil co možná nejdéle. 
          Velmi důležitý je pro mě i vyladěný design a pravidla přístupnosti, pro co nejlepší uživatelský zážitek.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <ProjectCardLg 
            name={'akcenta.cz'}
            description={'Nové stránky pro Akcenta CZ v rámci redesignu identity firmy. Web je postavený v Next.js, využívá headless CMS a je připravený na spuštění v 8 jazykových verzích.'}
            imgHorizontal={'akcenta-horizontal.png'}
            imgVertical={'akcenta-vertical.png'}
            url={'https://www.akcenta.cz/'}
            ghUrl={'https://github.com/akcentacz'}
            database="Strapi"
          />
          <ProjectCardLg 
            name={'Lynxes'}
            description={'Demo showcase e-shopu, který využívá všechny výhody nejmodernějšího techstacku. V další fázi projektu plánuji napojit platební bránu Stripe.'}
            imgHorizontal={'lynxes-horizontal.png'}
            imgVertical={'lynxes-vertical.png'}
            url={'https://lynxes.tomaslukes.com/'}
            ghUrl={'https://github.com/TomasLukes/lynxes'}
            database="Firebase"
          />
        </div>
    </section>
  )
}

export default Projects