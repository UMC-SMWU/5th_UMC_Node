export const createUserResponseDTO = (user, userFoodTypes) => {
    return {
        email: user.email,
        name: user.name,
        food_types: userFoodTypes,
    };
};
