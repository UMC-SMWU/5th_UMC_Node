import { Mission } from '../models';

export const insertMission = async (data) => {
    return Mission.create({
        store_id: data.store_id,
        target_amount: data.target_amount,
        reward: data.reward,
        deadline: data.deadline,
    });
};

export const getById = async (missionId) => {
    return Mission.findByPk(missionId);
};

export const insertUserMission = async (mission, userId) => {
    return mission.addUser(userId);
};
