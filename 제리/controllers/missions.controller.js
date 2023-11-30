import { response } from '../config/response';
import { status } from '../config/response.status';

import { createMission, createUserMission } from '../services/missions.service';

export const addMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await createMission(req.body)));
};

export const challengeMission = async (req, res, next) => {
    const userId = 1;
    res.send(response(status.SUCCESS, await createUserMission(userId, req.params)));
};
