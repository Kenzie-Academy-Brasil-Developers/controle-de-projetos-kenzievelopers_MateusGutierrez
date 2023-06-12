import { QueryConfig, QueryResult } from "pg";
import { TGetAllAboutDev } from "../../interfaces/dev.interfaces";
import { client } from "../../database";

export const readAllAboutDevService = async (id: number): Promise<TGetAllAboutDev> => {
    const queryString: string = `
    SELECT
        "dev"."id" AS "developerId",
        "dev"."name" AS "developerName",
        "dev"."email" AS "developerEmail",
        "i"."developerSince" AS "developerInfoDeveloperSince",
        "i"."preferredOS" AS "developerInfoPreferredOS"
    FROM
        developers AS "dev"
    LEFT JOIN
        "developerInfos" AS "i" ON "dev"."id" = "i"."developerId"
    WHERE "dev"."id" = $1;
        `

        const queryResultAllDevInfo : QueryResult<TGetAllAboutDev> = await client.query(queryString,[id])
        return queryResultAllDevInfo.rows[0]    
}
