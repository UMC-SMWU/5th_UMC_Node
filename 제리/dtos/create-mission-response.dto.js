export const createMissionResponseDTO = (mission, store) => {
    return {
        target_amount: mission.target_amount,
        reward: mission.reward,
        deadline: mission.deadline,
        store_name: store.name,
    };
};
