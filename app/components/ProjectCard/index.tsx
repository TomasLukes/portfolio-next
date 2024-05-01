import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import ProjectCardIcons from "@/components/ProjectCard/ProjectCardIcons";
import ProjectCardLinks from "@/components/ProjectCard/ProjectCardLinks";

import { IProjectCard } from "@/components/ProjectCard/prop";

const ProjectCard = ({
  name,
  description,
  img,
  url,
  ghUrl,
  database,
}: IProjectCard): ReactElement => {
  return (
    <article className="h-[500px] flex flex-col overflow-hidden bg-neutral-900 border border-gray-700 rounded-lg shadow-md">
      <Link href={`${url}`} target="_blank">
        <Image
          src={`/assets/images/projects-screenshots/${img}`}
          alt={`Ukázka stránky projektu ${name}`}
          className="w-full"
          width={517}
          height={263}
        />
      </Link>
      <div className="flex flex-col flex-grow py-4 md:py-6 px-6 md:px-8">
        <div>
          <div className="flex mb-4 items-center justify-between gap-8">
            <h4 className="text-2xl font-bold tracking-tight">{name}</h4>
            <ProjectCardIcons database={database} />
          </div>
          <p className="pb-6 font-normal">{description}</p>
        </div>
        <ProjectCardLinks name={name} url={url} ghUrl={ghUrl} />
      </div>
    </article>
  );
};

export default ProjectCard;
