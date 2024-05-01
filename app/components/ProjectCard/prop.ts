export interface IProjectCard {
  name: string;
  description: string;
  img: string;
  ghUrl: string;
  url: string;
  database: EnumDatabase;
}

export enum EnumDatabase {
  Strapi = "Strapi",
  Firebase = "Firebase",
  Supabase = "Supabase",
}
