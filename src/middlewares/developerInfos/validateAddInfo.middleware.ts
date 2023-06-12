import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";
import { client } from "../../database";

export const validateAllInfo = async (req: Request, res: Response, next: NextFunction): Promise< Response | void> => {
    const {preferredOS} =req.body
    if(preferredOS !== "Windows" && preferredOS !== "Linux" && preferredOS !== "MacOS"){
        throw new AppError("Invalid OS option.", 400)
    }
    const query = await client.query(
        `
        SELECT * FROM "developerInfos" WHERE "developerSince" = $1;
        `,
        [req.body.developerSince]
    )
    if(query.rowCount > 0){
        const error: string = "Developer infos already exists."
        throw new AppError(error, 409)
    }

    const queryOS = await client.query(
        `
        SELECT * FROM "developerInfos" WHERE "preferredOS" = $1;
        `,
        [req.body.preferredOS]
    )
    if(queryOS.rowCount > 0){
        const error: string = "Developer infos already exists."
        throw new AppError(error, 409)
    }



    return next()
}