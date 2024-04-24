
export type ProjectCardLgProps = {
    imgHorizontal: string,
    imgVertical: string,
    database: string
} & IProjectCard

export type ProjectCardSmProps = {
    img: string
} & IProjectCard

export interface IProjectCard {
    name: string,
    description: string,
    ghUrl: string,
    url: string,
}