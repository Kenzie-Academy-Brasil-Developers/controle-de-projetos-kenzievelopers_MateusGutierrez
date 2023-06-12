import { QueryConfig, QueryResult } from "pg";
import { TDevInfo, TDevInfoCreate } from "../../interfaces/dev.interfaces";
import { client } from "../../database";
import { AppError} from "../../error";
import format from "pg-format";

export const createDevInfoService = async (id: number | string, payload: TDevInfoCreate):Promise<TDevInfo> => {
    const queryStringDevInfo: string = `
    SELECT * FROM developers WHERE "id" = $1;
    `
    const queryConfigDevInfo: QueryConfig = {
        text: queryStringDevInfo,
        values: [id]
    }
    const queryResultDevInfo : QueryResult = await client.query(queryConfigDevInfo)

   
    const updatedPayload = {
        ...payload, 
        developerId: id
    }
    const queryFormatDevInfo: string = format(
    `
    INSERT INTO "developerInfos" (%I) VALUES (%L) RETURNING *;
    `,
        Object.keys(updatedPayload),
        Object.values(updatedPayload),
        
    )
    
    const queryResultInfo : QueryResult<TDevInfo> = await client.query(queryFormatDevInfo)

    return queryResultInfo.rows[0]
}