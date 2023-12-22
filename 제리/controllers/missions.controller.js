import { response } from '../config/response';
import { status } from '../config/response.status';

import {
    createMission,
    createUserMission,
    findMissionByStoreId,
    findMissionByUserId,
} from '../services/missions.service';

export const addMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await createMission(req.body)));
};

export const challengeMission = async (req, res, next) => {
    const userId = 1;
    res.send(response(status.SUCCESS, await createUserMission(userId, req.params)));
};

export const fetchStoreMissions = async (req, res, next) => {
    res.send(response(status.SUCCESS, await findMissionByStoreId(req.params, req.query)));
};

export const fetchUserMissions = async (req, res, next) => {
    res.send(response(status.SUCCESS, await findMissionByUserId(req.params, req.query)));
};
