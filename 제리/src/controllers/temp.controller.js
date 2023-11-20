import { status } from '../../config/response.status.js';
import { getTempData } from '../providers/temp.provider.js';
import { response } from '../../config/response.js';

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};
