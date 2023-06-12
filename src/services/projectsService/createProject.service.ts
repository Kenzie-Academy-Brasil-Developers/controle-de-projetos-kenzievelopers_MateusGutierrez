import format from "pg-format";
import { TProject, TProjectCreate } from "../../interfaces/project.interface";
import { QueryResult } from "pg";
import { client } from "../../database";

export const createProjectService = async (payload: TProjectCreate): Promise<TProject> => {
    const formatString: string = format(`
    INSERT INTO projects (%I) VALUES (%L) RETURNING *;
    `,
    Object.keys(payload),
    Object.values(payload))
    const queryResult: QueryResult<TProject> = await client.query(formatString)
    return queryResult.rows[0]
}