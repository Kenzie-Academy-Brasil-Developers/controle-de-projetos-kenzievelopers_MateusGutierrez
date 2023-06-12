import { QueryConfig, QueryResult } from "pg"
import { TReadProject } from "../../interfaces/project.interface"
import { client } from "../../database"

export const readProjectService = async (id: number): Promise<TReadProject> =>{
    const queryString: string = `
    SELECT
        "p"."id" "projectId",
        "p"."name" "projectName",
        "p"."description" "projectDescription",
        "p"."repository" "projectRepository",
        "p"."startDate" "projectStartDate",
        "p"."endDate" "projectEndDate",
        "dev"."name" "projectDeveloperName"
    FROM
        projects "p"
    LEFT JOIN
        "developers" "dev" ON 
    "p"."id" = $1;
    `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id]
    }
    const queryResult: QueryResult<TReadProject> = await client.query(queryConfig)
    return queryResult.rows[0]
}


