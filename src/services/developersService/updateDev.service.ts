import format from "pg-format";
import { client } from "../../database";
import { TDev, TDevUpdate } from "../../interfaces/dev.interfaces";

export const updateDevService = async (id: number, payload: TDevUpdate): Promise<TDev> => {
    const queryFormat: string = format(
        `
        UPDATE developers SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;
        `,
        Object.keys(payload),
        Object.values(payload)
    )
    const queryResult = await client.query(queryFormat, [id])
    return queryResult.rows[0]
}