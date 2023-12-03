import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { createReviewResponseDTO } from "../dtos/review.dto.js"
// import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao.js";

export const createReview = async (body) => {
    const createReviewData = await addReview({
        'user_id': body.user_id,
        'store_id': body.store_id,
        'mission_id': body.mission_id,
        'rating': body.rating,
        'comment': body.comment
    });

    if(createReviewData == -1){
        // 존재하지 않는 가게일 경우 에러 발생
        throw new BaseError(status.STORE_DOESNT_EXISTS);
    }else{
        // else문 수정해야 함
        return createResponseDTO(await getReview(createReviewData), await getUserPreferToUserID(joinUserData));
    }
}