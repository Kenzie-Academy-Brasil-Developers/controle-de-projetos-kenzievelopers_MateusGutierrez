import "express-async-errors"
import "dotenv/config";
import express, { Application } from "express";
import { devRoutes } from "./routers/devRouters/index";
import { projectRouter } from "./routers/projectRouters/index";
import { handleError } from "./middlewares/handleErrors.middlewares";

const app: Application = express();
app.use(express.json())

app.use("/developers", devRoutes)
app.use('/projects', projectRouter)

app.use(handleError)
export default app;
