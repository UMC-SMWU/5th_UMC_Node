import { status } from '../../config/response.status.js';
//아래거 삭제..?
//import { getTempData } from '../services/temp.service.js';
import { response } from '../../config/response.js';

//추가 ㅜ
import { getTempData, CheckFlag } from '../services/temp.service.js';
//
export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};


export const tempException = (req, res, next) => {
    console.log("/temp/exception/"+req.params.flag);
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}