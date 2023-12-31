import express from "express";
import asyncHandler from 'express-async-handler';

import { missionChallenge } from "../controllers/mission.controller.js";

export const missionRouter = express.Router();
missionRouter.post('/:mission_id', asyncHandler(missionChallenge));