import { insertReview, selectReviewByUserId } from '../daos/reviews.dao';
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

export const findReviewByUserId = async (param) => {
    try {
        const reviews = await selectReviewByUserId(param.userId);
        return findReviewResponseDTO(reviews);
    } catch (err) {
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
};
