import express from "express";
import asyncHandler from 'express-async-handler';

import { storeAdd } from "../controllers/store.controller.js";

export const storeRouter = express.Router();
storeRouter.post('/add', asyncHandler(storeAdd));

// user는 바로 user/signin이었는데 만약 가게 추가를 region/store/add와 같이 한다면 어떻게 해야 할지...? 고민해봐야 할 듯