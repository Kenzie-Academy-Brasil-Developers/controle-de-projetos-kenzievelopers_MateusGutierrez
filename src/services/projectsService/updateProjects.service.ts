import format from "pg-format";
import { TProject, TProjectUpdate } from "../../interfaces/project.interface";
import { client } from "../../database";

export const updateProjectService = async (id: number ,payload: TProjectUpdate): Promise<TProject> =>{
    const queryFormat: string = format(
        `
        UPDATE projects SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;
        `,
        Object.keys(payload),
        Object.values(payload)
    )
    const queryResult = await client.query(queryFormat, [id])
    return queryResult.rows[0]
}