import { NextFunction, Response, Request } from "express"
import { client } from "../../database"
import { AppError } from "../../error"

export const validadeProjectId = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const {id} = req.params
    if(!id){
        return next()
    }
    const query = await client.query(
        `
        SELECT * FROM projects WHERE "id" = $1;
        `,
        [id]
    )
    if(query.rowCount === 0){
        throw new AppError("Project not found.", 404)
    }
    return next()
}