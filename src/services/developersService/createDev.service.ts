import format from "pg-format";
import { TDev, TDevCreate } from "../../interfaces/dev.interfaces";
import { QueryResult } from "pg";
import { client } from "../../database";

export const createDevService = async (payload: TDevCreate): Promise<TDev> => {
    const formatString: string = format(`
    INSERT INTO developers (%I) VALUES (%L) RETURNING *;
    `,
    Object.keys(payload),
    Object.values(payload))
    const queryResult: QueryResult<TDev> = await client.query(formatString)
    return queryResult.rows[0]
}