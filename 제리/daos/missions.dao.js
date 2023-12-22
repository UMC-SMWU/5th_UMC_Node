import { Mission, Store } from '../models';
import { Op } from 'sequelize';

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

export const selectMissionByStoreId = async (storeId, missionId, limit) => {
    const condition = {
        store_id: storeId,
        ...(missionId !== undefined && { id: { [Op.lt]: missionId } }),
    };
    return buildSelectQuery(condition, limit);
};

const buildSelectQuery = (condition, limit) => {
    return Mission.findAll({
        raw: true,
        where: condition,
        include: [
            {
                model: Store,
                attributes: ['name'],
            },
        ],
        attributes: ['reward', 'target_amount'],
        order: [['id', 'DESC']],
        limit: limit,
    });
};
