import { Router, request } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

const upload = multer(uploadConfig);

const usersRouter = Router();
const userAvatarController = new UserAvatarController();

const usersController = new UsersController();

usersRouter.post('/', usersController.create);

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);

export default usersRouter;
