'use strict';

module.exports = function (app) {
    app.use('/', require('../routes/swagger'));
    app.use('/api/v1', require('../routes/jobs'));
};