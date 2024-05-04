import { StaticImageData } from "next/image";

export interface IProjectCard {
  name: string;
  description: string;
  img: StaticImageData;
  ghUrl: string;
  url: string;
  database: EnumDatabase;
}

export enum EnumDatabase {
  Strapi = "Strapi",
  Firebase = "Firebase",
  Supabase = "Supabase",
}
