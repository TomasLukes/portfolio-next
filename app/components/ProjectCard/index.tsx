import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <article className="h-[450px] md:h-[600px] lg:h-[500px] flex flex-col overflow-hidden bg-neutral-900 border border-gray-700 rounded-lg shadow-md">
      <Link href={`${url}`} target="_blank">
        <Image
          src={img}
          alt={`Ukázka stránky projektu ${name}`}
          placeholder="blur"
          className="w-full"
        />
      </Link>
      <div className="flex flex-col flex-grow py-4 md:py-6 px-6 md:px-8">
        <div className="w-full">
          <div className="flex items-center justify-between flex-wrap mb-4">
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
