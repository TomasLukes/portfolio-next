import AkcentaCZWebImage from "@/assets/images/projects-screenshots/akcenta-web.png";
import AkcentaDigitalWebImage from "@/assets/images/projects-screenshots/digital-web.png";
import LynxesWebImage from "@/assets/images/projects-screenshots/lynxes-web.png";
import { EnumDatabase, IProjectCard } from "@/components/ProjectCard/prop";

export const projectsData: IProjectCard[] = [
  {
    name: "Akcenta CZ",
    description:
      "New pages for Akcenta CZ as part of the company's identity redesign. The website is built in Next.js, utilizes a headless CMS, and is ready to launch in 8 language versions.",
    ghUrl: "https://github.com/akcentacz",
    url: "https://www.akcenta.cz",
    img: AkcentaCZWebImage,
    database: EnumDatabase.Strapi,
  },
  {
    name: "akcenta.digital",
    description:
      "Landing page for digital agency. I had oporutinity to implement and fine-tune different animations and also create blog during my work on this project.",
    ghUrl: "https://github.com/akcentacz",
    url: "https://www.akcenta.digital",
    img: AkcentaDigitalWebImage,
    database: EnumDatabase.Supabase,
  },
  {
    name: "Lynxes",
    description:
      "Older demo showcase of an e-shop that leverages all the advantages of the latest tech stack. In the next phase of the project, I plan to refactor codebase and integrate the Stripe payment gateway.",
    url: "https://lynxes.tomaslukes.com/",
    ghUrl: "https://github.com/TomasLukes/lynxes",
    img: LynxesWebImage,
    database: EnumDatabase.Firebase,
  },
];
