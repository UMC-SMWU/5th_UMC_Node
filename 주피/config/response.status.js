import { StatusCodes } from "http-status-codes";

export const status = {
    SUCCESS: {status: StatusCodes.OK, "isSuccess": true, "code": 2000, "message": "SUCCESS!"},

    EMAIL_ALREADY_EXISTS: {status: StatusCodes.EMAIL_ALREADY_EXISTS, "isSuccess": false, "code": "MEMBER001", "message": "이미 등록된 이메일입니다."}
    // -1을 반환하여 에러 처리하라는데 message 부분 말하는 건가...
}