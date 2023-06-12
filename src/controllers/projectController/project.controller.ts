import { Request, Response } from "express"
import { TProjectCreate} from "../../interfaces/project.interface"
import { createProjectService,readProjectService,updateProjectService } from "../../services/projectsService/index"

export const createProjectController = async (req: Request, res: Response): Promise<Response> => {
    const payload: TProjectCreate = req.body
    const newProject = await createProjectService(payload)
    return res.status(201).json(newProject)
}

export const readProjectController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)
    const readProject = await readProjectService(id)
    return res.status(200).json(readProject)
}

export const updateProjectController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)
    const payload= req.body
    const update = await updateProjectService(id, payload)
    return res.status(200).json(update)
}