import express from 'express';
import asyncHandler from 'express-async-handler';

import { addMission, challengeMission } from '../controllers/missions.controller.js';

export const missionsRouter = express.Router();

missionsRouter.post('/', asyncHandler(addMission));
missionsRouter.post('/:missionId', asyncHandler(challengeMission));
