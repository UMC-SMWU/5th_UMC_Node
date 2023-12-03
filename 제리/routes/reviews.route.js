import express from 'express';
import asyncHandler from 'express-async-handler';

import { addReview } from '../controllers/reviews.controller.js';

export const reviewsRouter = express.Router();

reviewsRouter.post('/', asyncHandler(addReview));
