
export type ProjectCardLgProps = {
    database?: string
} & IProjectCard

export type ProjectCardSmProps = {
} & IProjectCard

export interface IProjectCard {
    name: string,
    description: string,
    img: string
    ghUrl: string,
    url: string,
}