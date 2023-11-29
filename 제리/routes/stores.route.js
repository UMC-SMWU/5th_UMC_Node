import express from 'express';
import asyncHandler from 'express-async-handler';

import { addStore } from '../controllers/stores.controller.js';

export const storesRouter = express.Router();

storesRouter.post('/', asyncHandler(addStore));
