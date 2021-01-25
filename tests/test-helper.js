import Application from 'lti-course-manager/app';
import config from 'lti-course-manager/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
