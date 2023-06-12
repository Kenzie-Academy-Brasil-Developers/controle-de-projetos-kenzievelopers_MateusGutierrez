import { QueryResult } from "pg"

export type TDev = {
    id: number,
    name: string,
    email:string
}

export type TDevCreate = Omit <TDev,"id">
export type TDevUpdate = Partial<TDevCreate>

export type TDevInfo = {
    id: number,
    developerSince: Date | string,
    preferredOS: "Windows" | "Linux" | "MacOS",
    developerId: number 
}
export type TDevInfoCreate = Omit<TDevInfo, "id" | "developerId">


export type TGetAllAboutDev = {
    developerId: number,
    developerName: string,
    developerEmail: string,
    developerInfoDeveloperSince: Date | null,
    developerInfoPreferredOS: string | null
}
