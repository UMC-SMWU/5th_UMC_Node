import express from 'express';
import asyncHandler from 'express-async-handler';

import {
    addMission,
    challengeMission,
    fetchStoreMissions,
    fetchUserMissions,
    completeMission,
} from '../controllers/missions.controller.js';

export const missionsRouter = express.Router();

missionsRouter.post('/', asyncHandler(addMission));
missionsRouter.post('/:missionId', asyncHandler(challengeMission));
missionsRouter.get('/stores/:storeId', asyncHandler(fetchStoreMissions));
missionsRouter.get('/users/:userId', asyncHandler(fetchUserMissions));
missionsRouter.patch('/:missionId/users/:userId', asyncHandler(completeMission));
