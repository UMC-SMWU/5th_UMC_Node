import { insertMission } from '../daos/missions.dao';
import { getStoreName } from '../daos/stores.dao';
import { BaseError } from '../config/error';
import { status } from '../config/response.status';
import { createMissionResponseDTO } from '../dtos/create-mission-response.dto';

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
