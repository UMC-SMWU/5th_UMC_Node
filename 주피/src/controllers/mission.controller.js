import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { createUserMission } from "../services/mission.service.js";

export const missionChallenge = async (req, res, next) => {
    console.log("미션 도전을 요청하였습니다!");

    const { mission_id } = req.params;

    console.log(response(status.SUCCESS));

    res.send(response(status.SUCCESS, await createUserMission(req.params)));
}