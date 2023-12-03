import { Review } from '../models';

export const insertReview = async (userId, data) => {
    return Review.create({
        user_id: userId,
        store_id: data.store_id,
        mission_id: data.mission_id,
        rating: data.rating,
        content: data?.content,
    });
};
