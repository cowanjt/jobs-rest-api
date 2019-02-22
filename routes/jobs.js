'use strict';

const express = require('express');
const jobsController = require('../controllers/jobsController');
const jobs = express.Router();

jobs
  .get('/jobs', jobsController.getJobs)
  .get('/jobs/:id', jobsController.getJob)

module.exports = jobs;