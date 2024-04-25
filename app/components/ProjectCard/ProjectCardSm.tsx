import { ReactElement } from "react"
import Image from "next/image"

import { ProjectCardSmProps } from "@/components/ProjectCard/prop"
import Icons from "@/components/Icons"

const ProjectCardSm = ({ name, description, img, url, ghUrl }: ProjectCardSmProps): ReactElement => {
  return (
    <article className="flex flex-col max-w-sm bg-neutral-800 border border-gray-700 rounded-lg shadow-md">
      <a href={`${url}`} rel="noreferrer" target="_blank" aria-label={`See live page of ${name}`}>
        <Image 
          src={`/assets/images/projects-screenshots/${img}`}
          alt=""
          className="rounded-t-lg"
        />
      </a>
      <div className="flex-grow px-8 pt-5">
        <h5 className="pb-2 text-2xl font-bold tracking-tight">
          {name}
        </h5>
        <p className="pb-6 font-normal">
          {description}
        </p>
      </div>
      <div className="flex gap-4 px-8 pb-5">
        <a href={`${ghUrl}`} rel="noreferrer" target="_blank" aria-label={`See ${name} code at Github`} className="flex items-center px-3 py-2 text-sm rounded-lg font-medium border border-1 border-neutral-300 hover:border-yellow-500"
        >
          Code
          {Icons.socials.github}
        </a>
        <a href={`${url}`} rel="noreferrer" target="_blank" aria-label={`See live page of ${name}`} className="flex items-center px-3 py-2 text-sm rounded-lg font-medium border border-1 border-neutral-300 hover:border-yellow-500"
        >
          Live
          {Icons.socials.link}        
        </a>
      </div>
    </article>
  )
}

export default ProjectCardSm