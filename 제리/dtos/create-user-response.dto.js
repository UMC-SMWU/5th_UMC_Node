export const createUserResponseDTO = (user, data) => {
    const userFoodTypeNames = data.map((item) => item['FoodTypes.type_name']);
    return {
        email: user.email,
        name: user.name,
        food_types: userFoodTypeNames,
    };
};
