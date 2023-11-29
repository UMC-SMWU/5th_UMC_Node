import { response } from '../config/response';
import { status } from '../config/response.status';

import { createMission } from '../services/missions.service';

export const addMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await createMission(req.body)));
};
