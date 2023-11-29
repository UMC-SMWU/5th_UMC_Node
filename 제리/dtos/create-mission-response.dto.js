export const createMissionResponseDTO = (mission, storeName) => {
    return {
        target_amount: mission.target_amount,
        reward: mission.reward,
        deadline: mission.deadline,
        store_name: storeName,
    };
};
