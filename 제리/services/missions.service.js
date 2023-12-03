import { insertMission, getById, insertUserMission } from '../daos/missions.dao';
import { getStoreName } from '../daos/stores.dao';
import { getUserName } from '../daos/users.dao';
import { BaseError } from '../config/error';
import { status } from '../config/response.status';
import { createMissionResponseDTO } from '../dtos/create-mission-response.dto';
import { createUserMissionResponseDTO } from '../dtos/create-user_mission-response.dto';

export const createMission = async (body) => {
    try {
        const mission = await insertMission(body);
        return createMissionResponseDTO(mission, await getStoreName(body.store_id));
    } catch (err) {
        if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeDatabaseError') {
            throw new BaseError(status.BAD_REQUEST);
        } else if (err.name === 'SequelizeForeignKeyConstraintError') {
            throw new BaseError(status.NOT_FOUND);
        } else {
            throw new BaseError(status.INTERNAL_SERVER_ERROR);
        }
    }
};

export const createUserMission = async (userId, params) => {
    try {
        const mission = await getById(params.missionId);
        if (!mission) {
            throw new BaseError(status.NOT_FOUND);
        }
        const userMission = await insertUserMission(mission, userId);
        if (!userMission) {
            throw new BaseError(status.DUPLICATE_ENTRY);
        }
        return createUserMissionResponseDTO(
            await getUserName(userId),
            await getStoreName(mission.store_id),
            mission,
            userMission
        );
    } catch (err) {
        if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeDatabaseError') {
            throw new BaseError(status.BAD_REQUEST);
        } else if (err instanceof BaseError) {
            throw err;
        } else {
            throw new BaseError(status.INTERNAL_SERVER_ERROR);
        }
    }
};
