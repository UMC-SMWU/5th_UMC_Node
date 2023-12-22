import { Mission, Store, UserMission } from '../models';
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
    };
    if (missionId !== undefined) {
        condition.id = {
            [Op.lt]: missionId,
        };
    }
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

export const selectMissionByUserId = async (userId, missionId, limit) => {
    const condition = {
        user_id: userId,
        status: 0,
    };
    if (missionId !== undefined) {
        const mission = await UserMission.findOne({
            raw: true,
            where: {
                mission_id: missionId,
                user_id: userId,
            },
            attributes: ['created_at'],
        });
        condition.created_at = {
            [Op.lt]: mission?.created_at,
        };
    }
    return UserMission.findAll({
        raw: true,
        where: condition,
        include: [
            {
                model: Mission,
                attributes: ['reward', 'target_amount'],
                include: [
                    {
                        model: Store,
                        attributes: ['name'],
                    },
                ],
            },
        ],
        attributes: [],
        order: [['created_at', 'DESC']],
        limit: limit,
    });
};
