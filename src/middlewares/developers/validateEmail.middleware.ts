import { NextFunction, Request, Response } from "express";
import { client } from "../../database";
import { AppError } from "../../error";

export const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const query = await client.query(
        `
        SELECT * FROM "developers" WHERE "email" = $1;
        `,
        [req.body.email]
    )
    if(query.rowCount > 0){
        const error: string = "Email already exists."
        throw new AppError(error, 409)
    }
    return next()
}