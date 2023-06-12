import {Router} from 'express';
import { createDevController, createInfoDevController, destroyDevController, readAllAboutDevController, updateDevControler } from '../../controllers/devController/index';
import { validateEmail } from '../../middlewares/developers/validateEmail.middleware';
import { validateId } from '../../middlewares/developers/validateId.middleware';
import { validateAllInfo } from '../../middlewares/developerInfos/validateAddInfo.middleware';

export const devRoutes: Router = Router();

devRoutes.post('', validateEmail,createDevController)
devRoutes.get('/:id', validateId,readAllAboutDevController)
devRoutes.patch('/:id', validateId,validateEmail,updateDevControler)
devRoutes.delete('/:id', validateId,destroyDevController)

devRoutes.post('/:id/infos', validateId,validateAllInfo,createInfoDevController)