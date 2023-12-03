import express from "express";
import asyncHandler from 'express-async-handler';

import { missionChallenge } from "../controllers/mission.controller.js";

export const missionRouter = express.Router();
reviewRouter.post('/challenge', asyncHandler(missionChallenge));