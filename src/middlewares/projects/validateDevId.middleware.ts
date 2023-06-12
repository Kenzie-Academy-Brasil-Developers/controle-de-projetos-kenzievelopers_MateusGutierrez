import { NextFunction, Request, Response } from "express";
import { client } from "../../database";
import { AppError } from "../../error";

export const validadeDevId = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const {developerId} = req.body
    if(!developerId){
        return next()
    }
    const query = await client.query(
        `
        SELECT * FROM developers WHERE "id" = $1;
        `,
        [developerId]
    )
    if(query.rowCount === 0){
        throw new AppError("Developer not found.", 404)
    }
    return next()
}