import { insertUser, setUserFoodType, getUserFoodTypeNamesById } from '../daos/users.dao';
import { BaseError } from '../config/error';
import { status } from '../config/response.status';
import { createUserResponseDTO } from '../dtos/create-user-response.dto';

export const createUser = async (body) => {
    try {
        const user = await insertUser(body);
        for (let i = 0; i < body.food_types.length; i++) {
            await setUserFoodType(user, body.food_types[i]);
        }
        return createUserResponseDTO(user, await getUserFoodTypeNamesById(user.id));
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            throw new BaseError(status.DUPLICATE_ENTRY);
        } else if (err.name === 'SequelizeValidationError') {
            throw new BaseError(status.BAD_REQUEST);
        } else {
            throw new BaseError(status.INTERNAL_SERVER_ERROR);
        }
    }
};
