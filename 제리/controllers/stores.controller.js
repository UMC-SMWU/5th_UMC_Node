import { response } from '../config/response';
import { status } from '../config/response.status';

import { createStore } from '../services/stores.service';

export const addStore = async (req, res, next) => {
    res.send(response(status.SUCCESS, await createStore(req.body)));
};
