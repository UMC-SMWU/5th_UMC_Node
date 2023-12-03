import { User, FoodType } from '../models';

export const insertUser = async (data) => {
    return User.create({
        name: data.name,
        gender: data.gender,
        birth: data.birth,
        address: data.address,
        address_detail: data?.address_detail,
        email: data.email,
        phone: data?.phone,
    });
};

export const setUserFoodType = async (user, foodType) => {
    return user.addFoodType(foodType);
};

export const getUserFoodTypeNamesById = async (userId) => {
    return User.findAll({
        raw: true,
        where: { id: parseInt(userId, 10) },
        attributes: [],
        include: [
            {
                model: FoodType,
                attributes: ['type_name'],
                through: {
                    attributes: [],
                },
            },
        ],
    });
};

export const getUserName = async (userId) => {
    return User.findOne({
        where: {
            id: userId,
        },
        attributes: ['name'],
    });
};
