export const createUserMissionResponseDTO = (user, store, mission, userMission) => {
    return {
        user_name: user.name,
        store_name: store.name,
        target_amount: mission.target_amount,
        reward: mission.reward,
        deadline: mission.deadline,
        status: userMission[0].dataValues.status,
    };
};
