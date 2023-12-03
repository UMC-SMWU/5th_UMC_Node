import express from "express";
import asyncHandler from 'express-async-handler';

import { reviewCreate } from "../controllers/review.controller.js";

export const reviewRouter = express.Router();
reviewRouter.post('/create', asyncHandler(reviewCreate));