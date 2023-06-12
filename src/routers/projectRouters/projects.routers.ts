import { Router } from "express";
import { createProjectController, readProjectController, updateProjectController } from "../../controllers/projectController/index";
import { validadeDevId } from "../../middlewares/projects/validateDevId.middleware";
import { validadeProjectId } from "../../middlewares/projects/validadeProjectId.middleware";

export const projectRouter: Router = Router()

projectRouter.post('', validadeDevId,createProjectController)
projectRouter.get('/:id', validadeProjectId,readProjectController)
projectRouter.patch('/:id', validadeDevId,validadeProjectId,updateProjectController)