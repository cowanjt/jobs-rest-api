'use strict';

const p = process.env;

module.exports = {
  PORT: p.PORT || 3000,
  ENVIRONMENT: p.ENVIRONMENT || 'local',
  MONGODB_URI: p.MONGODB_URI
};