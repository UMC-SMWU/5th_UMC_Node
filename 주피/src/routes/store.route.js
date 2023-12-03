import express from "express";
import asyncHandler from 'express-async-handler';

import { storeResiter } from "../controllers/store.controller.js";

export const storeRouter = express.Router();
storeRouter.post('/register', asyncHandler(storeResiter));