import express from 'express';
import { response } from './config/response.js';
import { tempRouter } from './src/routes/temp.route.js';
import { BaseError } from './config/error.js';
import { status } from './config/response.status.js';

const app = express();
const port = 3000;

app.use('/temp', tempRouter);

//error handling
app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
