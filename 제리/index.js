import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import SwaggerUi from 'swagger-ui-express';

import { specs } from './config/swagger.config.js';
import { sequelize } from './models/index.js';
import { response } from './config/response.js';
import { status } from './config/response.status.js';
import { BaseError } from './config/error.js';

import { usersRouter } from './routes/users.route.js';
import { storesRouter } from './routes/stores.route.js';
import { missionsRouter } from './routes/missions.route.js';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

app.use('/users', usersRouter);
app.use('/stores', storesRouter);
app.use('/missions', missionsRouter);

app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.err = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});
