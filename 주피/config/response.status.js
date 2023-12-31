import { StatusCodes } from "http-status-codes";

export const status = {
    SUCCESS: {
        "status": StatusCodes.OK,
        "isSuccess": true,
        "code": 200,
        "message": "success!",
        "data": {
          "email": "swaggerTest@mail.com",
          "name": "swagger",
          "preferCategory": [
            "한식",
            "일식"
          ]
        }
      },
    INTERNAL_SERVER_ERROR: {
        "status": StatusCodes.INTERNAL_SERVER_ERROR,
        "isSuccess": false,
        "code": "COMMON000",
        "message": "서버 에러, 관리자에게 문의 바랍니다."
      },
    PARAMETER_IS_WRONG: {
        "status": StatusCodes.BAD_REQUEST,
        "isSuccess": false,
        "code": "COMMON001",
        "message": "잘못된 요청입니다."
      },
    EMAIL_ALREADY_EXISTS: {
        "status": StatusCodes.CONFLICT,
        "isSuccess": false,
        "code": "MEMBER001",
        "message": "이미 가입된 이메일입니다."
      },
    STORE_ALREADY_EXISTS: {
        "status": StatusCodes.CONFLICT,
        "isSuccess": false,
        "code": "STORE001",
        "message": "이미 등록된 가게입니다."
      }
}