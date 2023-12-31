import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addUserMissionResponseDTO } from "../dtos/mission.dto.js"
import { addUserMission } from "../models/mission.dao.js";

export const createUserMission = async (req) => {

    const createUserMissionData = await addUserMission(req.mission_id);

    if(createUserMissionData == -1){
        // 존재하지 않는 미션일 경우 에러 발생
        throw new BaseError(status.MISSION_DOESNT_EXISTS);
    }

    await addUserMission(req.mission_id);
    return addUserMissionResponseDTO(req);
}