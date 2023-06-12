export type TProject = {
    id: number,
    name: string,
    description: string,
    repository: string,
    startDate: Date | string | null,
    endDate: Date | string | null
    developerId: string | null,
}

export type TProjectCreate = Omit<TProject, "id">

export type TProjectUpdate = {
    name?: string,
    description?: string,
    repository?: string,
    startDate?: Date | string | null,
    endDate?: Date | string | null
    developerId?: string | null,
}

export type TReadProject = {

        projectId: number,
        projectName: string,
        projectDescription: string,
        projectRepository: string,
        projectStartDate: Date | string | null,
        projectEndDate: Date | string | null,
        projectDeveloperName: string
    
}