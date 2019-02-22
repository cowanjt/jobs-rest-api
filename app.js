'use strict';

require('dotenv').load();
global.Promise = require('bluebird');

const express = require('express');
const app = express();
const config = require('./config');

require('./database');
require('./routes/index.js')(app);

app.listen(config.PORT);