import SwaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        info: {
            title: 'mission9-jerry',
            version: '0.0.1',
            description: 'Chapter 9. API & Swagger',
        },
        host: 'localhost:3000',
        basepath: '../',
    },
    apis: ['./routes/*.js', './swagger/*'],
};

export const specs = SwaggerJsdoc(options);
