import { ReactElement } from "react"

import ProjectCardLg from "@/components/ProjectCard/ProjectCardLg"

const Projects = ():ReactElement => {
  return (
    <section id="projects" className="pt-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
          Projects
        </h2>
        <p className="md:w-4/5 lg:w-3/5 text-left md:text-justify mb-6 md:mb-12">
          {`
            Here is a sample of several projects I've had the opportunity to work on. I always use the latest tech stack, 
            emphasizing code quality to ensure the website serves for as long as possible. A polished design and accessibility
            rules are also crucial to me for the best user experience possible.
          `}
        </p>
        <div className="flex flex-col md:flex-row gap-8 mb-20">
          <ProjectCardLg 
            name={'akcenta.cz'}
            description={
              `New pages for Akcenta CZ as part of the company's identity redesign. The website is built in Next.js, 
              utilizes a headless CMS, and is ready to launch in 8 language versions.`}
            imgHorizontal={'akcenta-horizontal.png'}
            imgVertical={'akcenta-vertical.png'}
            url={'https://www.akcenta.cz/'}
            ghUrl={'https://github.com/akcentacz'}
            database="Strapi"
          />
          <ProjectCardLg 
            name={'Lynxes'}
            description={
              `A demo showcase of an e-shop that leverages all the advantages of the latest tech stack. In the next phase of the project, 
              I plan to integrate the Stripe payment gateway.`
            }
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