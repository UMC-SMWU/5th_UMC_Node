import { response } from '../config/response';
import { status } from '../config/response.status';

import { createReview, findReviewByStoreId, findReviewByUserId } from '../services/reviews.service';

export const addReview = async (req, res, next) => {
    const userId = 1;
    res.send(response(status.SUCCESS, await createReview(userId, req.body)));
};

export const fetchStoreReviews = async (req, res, next) => {
    res.send(response(status.SUCCESS, await findReviewByStoreId(req.params, req.query)));
};

export const fetchUserReviews = async (req, res, next) => {
    res.send(response(status.SUCCESS, await findReviewByUserId(req.params, req.query)));
};
