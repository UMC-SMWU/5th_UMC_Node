export const findMissionResponseDTO = (missions) => {
    return missions.map((mission) => ({
        reward: mission.reward || mission['Mission.reward'],
        store_name: mission['Store.name'] || mission['Mission.Store.name'],
        target_amount: mission.target_amount || mission['Mission.target_amount'],
    }));
};
