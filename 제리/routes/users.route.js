import express from 'express';
import { signUp } from '../controllers/users.controller.js';

export const usersRouter = express.Router();

usersRouter.post('/', signUp);
