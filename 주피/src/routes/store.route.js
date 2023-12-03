import express from "express";
import asyncHandler from 'express-async-handler';

import { storeRegister } from "../controllers/store.controller.js";

export const storeRouter = express.Router();
storeRouter.post('/register', asyncHandler(storeRegister));