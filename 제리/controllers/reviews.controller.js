import { response } from '../config/response';
import { status } from '../config/response.status';

import { createReview } from '../services/reviews.service';

export const addReview = async (req, res, next) => {
    const userId = 1;
    res.send(response(status.SUCCESS, await createReview(userId, req.body)));
};
