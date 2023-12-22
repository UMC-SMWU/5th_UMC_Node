import { insertReview, selectReviewByStoreId, selectReviewByUserId } from '../daos/reviews.dao';
import { getStoreName } from '../daos/stores.dao';
import { getUserName } from '../daos/users.dao';
import { BaseError } from '../config/error';
import { status } from '../config/response.status';
import { createReviewResponseDTO } from '../dtos/create-review-response.dto';
import { findReviewResponseDTO } from '../dtos/find-review-response.dto';

export const createReview = async (userId, body) => {
    try {
        const review = await insertReview(userId, body);
        return createReviewResponseDTO(review, await getUserName(userId), await getStoreName(body.store_id));
    } catch (err) {
        console.log(err.name);
        if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeDatabaseError') {
            throw new BaseError(status.BAD_REQUEST);
        } else if (err.name === 'SequelizeUniqueConstraintError') {
            throw new BaseError(status.DUPLICATE_ENTRY);
        } else if (err.name === 'SequelizeForeignKeyConstraintError') {
            throw new BaseError(status.NOT_FOUND);
        } else {
            throw new BaseError(status.INTERNAL_SERVER_ERROR);
        }
    }
};

export const findReviewByStoreId = async (param, query) => {
    try {
        const { userId, missionId, limit = 3 } = query;
        const reviews = await selectReviewByStoreId(param.storeId, userId, missionId, limit);
        return findReviewResponseDTO(reviews);
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
};

export const findReviewByUserId = async (param, query) => {
    try {
        const { storeId, missionId, limit = 3 } = query;
        const reviews = await selectReviewByUserId(param.userId, storeId, missionId, limit);
        return findReviewResponseDTO(reviews);
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
};
