import { Review, User } from '../models';

export const insertReview = async (userId, data) => {
    return Review.create({
        user_id: userId,
        store_id: data.store_id,
        mission_id: data.mission_id,
        rating: data.rating,
        content: data?.content,
    });
};

export const selectReviewByUserId = async (userId) => {
    return Review.findAll({
        raw: true,
        where: {
            user_id: userId,
        },
        include: [
            {
                model: User,
                attributes: ['name'],
            },
        ],
        attributes: ['created_at', 'rating', 'content'],
    });
};
