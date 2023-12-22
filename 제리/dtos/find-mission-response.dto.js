export const findMissionResponseDTO = (missions) => {
    return missions.map((mission) => ({
        reward: mission.reward,
        store_name: mission['Store.name'],
        target_amount: mission.target_amount,
    }));
};
