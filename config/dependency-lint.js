/* eslint-env node */
'use strict';

module.exports = {
  allowedVersions: {
    'ember-inflector': '2.3.0 || ^3.0.0', // conflict between ember-data and mirage
    'ember-concurrency': '^0.8.20', // workaround for dep. conflict ilios-common/ember-simple-charts
  }
};
