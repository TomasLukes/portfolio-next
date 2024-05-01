import { ReactElement } from "react";

import Icons from "@/components/Icons";
import { EnumDatabase } from "@/components/ProjectCard/prop";

const ProjectCardIcons = ({ database }: { database: EnumDatabase }): ReactElement => {
  return (
    <div className="flex items-center gap-1">
      <Icons.techstack.nextjs />
      <Icons.techstack.react />
      <Icons.techstack.typescript />
      <Icons.techstack.tailwind />
      {database === EnumDatabase.Strapi && <Icons.techstack.strapi />}
      {database === EnumDatabase.Firebase && <Icons.techstack.firebase />}
      {database === EnumDatabase.Supabase && <Icons.techstack.supabase />}
    </div>
  );
};

export default ProjectCardIcons;
