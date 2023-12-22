import { Review, User } from '../models';
import { Op } from 'sequelize';

export const insertReview = async (userId, data) => {
    return Review.create({
        user_id: userId,
        store_id: data.store_id,
        mission_id: data.mission_id,
        rating: data.rating,
        content: data?.content,
    });
};

export const selectReviewByStoreId = async (storeId, userId, missionId, limit) => {
    const condition = {
        store_id: storeId,
    };
    return buildSelectQuery(condition, userId, storeId, missionId, limit);
};

export const selectReviewByUserId = async (userId, storeId, missionId, limit) => {
    const condition = {
        user_id: userId,
    };
    return buildSelectQuery(condition, userId, storeId, missionId, limit);
};

const buildSelectQuery = async (condition, userId, storeId, missionId, limit) => {
    if (userId != undefined && storeId != undefined && missionId !== undefined) {
        const review = await Review.findOne({
            raw: true,
            where: {
                user_id: userId,
                store_id: storeId,
                mission_id: missionId,
            },
            attributes: ['created_at'],
        });
        condition.created_at = {
            [Op.lt]: review?.created_at,
        };
    }
    return Review.findAll({
        raw: true,
        where: condition,
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
        attributes: ['created_at', 'rating', 'content'],
        order: [['created_at', 'DESC']],
        limit: limit,
    });
};
