import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { response } from './config/response.js';
import { status } from './config/response.status.js';

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.err = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});
