import { Mission } from '../models';

export const insertMission = async (data) => {
    return Mission.create({
        store_id: data.store_id,
        target_amount: data.target_amount,
        reward: data.reward,
        deadline: data.deadline,
    });
};
