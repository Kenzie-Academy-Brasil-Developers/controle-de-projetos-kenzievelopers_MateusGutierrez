import { QueryConfig } from "pg"
import { client } from "../../database"

export const destroyDevService = async (id: number): Promise<void> => {
    const queryString: string = `
    DELETE FROM developers WHERE "id" = $1
    `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id],
    }
    await client.query(queryConfig)
}