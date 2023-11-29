import { insertStore } from '../daos/stores.dao';
import { getRegionName } from '../daos/regions.dao';
import { BaseError } from '../config/error';
import { status } from '../config/response.status';
import { createStoreResponseDTO } from '../dtos/create-store-response.dto';

export const createStore = async (body) => {
    try {
        const store = await insertStore(body);
        return createStoreResponseDTO(store, await getRegionName(body.region_id));
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            throw new BaseError(status.BAD_REQUEST);
        } else if (err.name === 'SequelizeForeignKeyConstraintError') {
            throw new BaseError(status.NOT_FOUND);
        } else {
            throw new BaseError(status.INTERNAL_SERVER_ERROR);
        }
    }
};
