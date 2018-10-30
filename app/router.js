import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('course', {
    path: 'courses/:course_id',
    resetNamespace: true
  }, function(){
    this.route('publicationCheck', { path: '/publicationcheck'});
    this.route('publishall', { path: '/publishall'});
    this.route('rollover', { path: '/rollover'});
    this.route("session", {
      path: '/sessions/:session_id',
      resetNamespace: true
    }, function(){
      this.route('publicationCheck', {path: '/publicationcheck'});
      this.route('copy');
    });
  });
  this.route('printCourse', { path: 'course/:course_id/print'});
  this.route('course-materials', { path: 'courses/:course_id/materials'});

  this.route('course-rollover');
  this.route('course-visualizations', {
    path: 'data/courses/:course_id'
  });
  this.route('course-visualize-objectives', {
    path: 'data/courses/:course_id/objectives'
  });
  this.route('course-visualize-session-types', {
    path: 'data/courses/:course_id/session-types'
  });
  this.route('course-visualize-vocabularies', {
    path: 'data/courses/:course_id/vocabularies'
  });
  this.route('course-visualize-vocabulary', {
    path: 'data/courses/:course_id/vocabularies/:vocabulary_id'
  });
  this.route('course-visualize-term', {
    path: 'data/courses/:course_id/terms/:term_id'
  });
  this.route('course-visualize-session-type', {
    path: 'data/courses/:course_id/session-types/:session-type_id'
  });
  this.route('course-visualize-instructors', {
    path: 'data/courses/:course_id/instructors'
  });
  this.route('course-visualize-instructor', {
    path: 'data/courses/:course_id/instructors/:user_id'
  });
  this.route('login', { path: 'login/:token'});
  this.route('login-error');
});

export default Router;
