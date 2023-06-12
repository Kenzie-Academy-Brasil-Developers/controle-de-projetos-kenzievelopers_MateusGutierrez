import { Request, Response} from "express"
import { TDev, TDevCreate, TDevInfo, TDevInfoCreate, TDevUpdate, TGetAllAboutDev } from "../../interfaces/dev.interfaces"
import { createDevService,createDevInfoService,destroyDevService,updateDevService } from "../../services/developersService/index"
import { readAllAboutDevService } from "../../services/dev&infoService/index"


export const createDevController = async (req: Request, res: Response): Promise<Response> => {
    const dev:TDevCreate = req.body
    const newDev: TDev = await createDevService(dev)
    return res.status(201).json(newDev)
}

export const readAllAboutDevController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)
    const read = await readAllAboutDevService(id)
    return res.status(200).json(read)
}

export const updateDevControler = async (req: Request, res: Response): Promise<Response> => {
    const payload: TDevUpdate = req.body
    const id = Number(req.params.id)
    const updateDev: TDev = await updateDevService(id, payload)
    return res.status(200).json(updateDev)
}

export const destroyDevController = async (req: Request, res: Response): Promise<Response> => {
    const id = Number(req.params.id)
    await destroyDevService(id)
    return res.status(204).send()
}

export const createInfoDevController = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id
    const payload: TDevInfoCreate = req.body
    const newDevInfo: TDevInfo = await createDevInfoService(id, payload)
    return res.status(201).json(newDevInfo)
}