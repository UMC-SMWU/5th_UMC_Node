import { insertUser, setUserFoodType } from '../daos/users.dao';
import { BaseError } from 'sequelize';
import { status } from '../config/response.status';
import { createUserResponseDTO } from '../dtos/create-user-response.dto';

export const createUser = async (body) => {
    try {
        const user = await insertUser(body);
        const userFoodTypes = [];
        for (let i = 0; i < body.food_types.length; i++) {
            const userFoodType = await setUserFoodType(user, body.food_types[i]);
            userFoodTypes.push(userFoodType[0].dataValues.FoodTypeId);
        }
        return createUserResponseDTO(user, userFoodTypes);
    } catch (err) {
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
};
