import { NextFunction, Request, Response } from "express";
import { client } from "../../database";
import { TDev } from "../../interfaces/dev.interfaces";
import { AppError} from "../../error";

export const validateId = async (req:Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const {id} = req.params
    const queryResult = await client.query(
        `
        SELECT * FROM developers WHERE "id" = $1;
        `,
        [id]
    )
    const dev : TDev = queryResult.rows[0]
    if(!dev){
        throw new AppError("Developer not found.", 404)
    }
    return next()
}