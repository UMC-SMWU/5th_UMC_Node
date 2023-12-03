import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { createReviewSql, getReviewID, confirmStore } from './review.sql.js';

// review 데이터 삽입
export const addReview = async (data) => {
    try {
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmStore, [data.store_id]);

        if(confirm[0].isNOTExistStore){
            conn.release();
            return -1;
        } // 존재하지 않는 가게일 경우 -1 리턴

        const result = await pool.query(createReviewSql, [data.user_id, data.store_id, data.mission_id, data.rating, data.comment]);

        conn.release();
        return result[0].insertId;
    } catch (err) {
        console.log(err.message);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 리뷰 정보 얻기
export const getReview = async (reviewID) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewID, reviewID);
        if(review.length == 0){
            return -1;
        }
        conn.release();
        console.log("review is", review);
        return review;
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}