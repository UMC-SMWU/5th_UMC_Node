import { User } from '../models';
import { status } from '../config/response.status';

export const insertUser = async (data) => {
    try {
        return User.create({
            name: data.name,
            gender: data.gender,
            birth: data.birth,
            address: data.address,
            address_detail: data?.address_detail,
            email: data.email,
            phone: data?.phone,
        });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            throw new BaseError(status.DUPLICATE_EMAIL);
        } else if (err.name === 'SequelizeValidationError') {
            throw new BaseError(status.MISSING_SIGNUP_DATA);
        }
    }
};

export const setUserFoodType = async (user, foodType) => {
    return user.addFoodType(foodType);
};
