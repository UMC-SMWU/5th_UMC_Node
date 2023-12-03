import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addUserMissionResponseDTO } from "../dtos/mission.dto.js"
import { addUserMission, getUserMission } from "../models/mission.dao.js";

export const createUserMission = async (body) => {
    const createUserMissionData = await addUserMission({
        'user_id': body.user_id,
        'mission_id': body.mission_id,
        'status': body.status
    });

    if(createUserMissionData == -1){
        // 존재하지 않는 미션일 경우 에러 발생
        throw new BaseError(status.MISSION_DOESNT_EXISTS);
    }else{
        // else문 sql 생성 이후 수정해야 함
        return addUserMissionResponseDTO(await getUserMission(createUserMissionData));
    }
}