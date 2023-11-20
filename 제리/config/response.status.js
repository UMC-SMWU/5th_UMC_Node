import { StatusCodes } from 'http-status-codes';

export const status = {
    //success
    SUCCESS: { status: StatusCodes.OK, isSuccess: true, code: 2000, message: 'success!' },

    //error
    BAD_REQUEST: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: 'COMMON001',
        message: '잘못된 요청입니다.',
    },
    NOT_FOUND: {
        status: StatusCodes.NOT_FOUND,
        isSuccess: false,
        code: 'COMMON005',
        message: '요청한 페이지를 찾을 수 없습니다. 관리자에게 문의 바랍니다.',
    },
};
