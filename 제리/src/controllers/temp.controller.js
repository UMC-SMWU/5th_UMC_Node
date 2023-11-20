import { status } from '../../config/response.status.js';
import { getTempData, CheckFlag } from '../providers/temp.provider.js';
import { response } from '../../config/response.js';
import { handleCall } from '../middlewares/temp.middleware.js';
import { BaseError } from '../../config/error.js';

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
};

export const tempAsyncException = handleCall(async (req, res, next) => {
    throw new BaseError(status.BAD_REQUEST);
});
