'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        pay_range: {
            type: String
        },
        is_new_job: {
            type: Boolean
        },
        description_url: {
            type: String
        },
        department: {
            type: String
        },
        job_title: {
            type: String
        },
        employer: {
            type: String
        }
    },
    {
        collection: 'OnlineJobsCollection'
    }
);

module.exports = mongoose.model('Job', schema);