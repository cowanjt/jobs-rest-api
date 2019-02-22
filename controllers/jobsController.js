'use strict';

const job = require('../models/job');

class JobsController {
    static getJobs(req, res) {
        job.find()
            .then(response => {
                res.send({ payload: response });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }

    static getJob(req, res) {
        job.findOne({_id: req.params.id})
            .then(response => {
                res.send({ payload: response });
            })
            .catch(err => {
                res.status(500).send(err);
            });
    }
}

module.exports = JobsController;