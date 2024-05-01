import { ReactElement } from "react";
import Link from "next/link";

import Icons from "@/components/Icons";

const ProjectCardLinks = ({
  name,
  url,
  ghUrl,
}: {
  name: string;
  url: string;
  ghUrl?: string;
}): ReactElement => {
  return (
    <div className="w-full mt-auto flex justify-center gap-4">
      <Link
        href={`${ghUrl}`}
        target="_blank"
        aria-label={`See ${name} code at Github`}
        className="flex items-center px-3 py-2 text-sm rounded-lg font-medium border border-1 border-neutral-300 hover:border-yellow-500"
      >
        Code
        <Icons.socials.github className="w-8 pl-3" />
      </Link>
      <Link
        href={`${url}`}
        target="_blank"
        aria-label={`See live page of ${name}`}
        className="flex items-center px-3 py-2 text-sm rounded-lg font-medium border border-1 border-neutral-300 hover:border-yellow-500"
      >
        Live
        <Icons.socials.link />
      </Link>
    </div>
  );
};

export default ProjectCardLinks;
