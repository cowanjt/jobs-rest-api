'use strict';

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swagger = express.Router();

const swaggerDefinition = {
    info: {
        title: 'Northern Colorado Jobs REST API',
        version: '0.0.1',
        description: 'Lists developer jobs in Northern Colorado.'
    },
    basePath: '/api/v1'
};

const options = {
    swaggerDefinition,
    apis: ['../routes/jobs.js']
};

const swaggerSpec = swaggerJSDoc(options);

swagger
    .use('/', swaggerUi.serve)
    .get('/', swaggerUi.setup(swaggerSpec))

module.exports = swagger;