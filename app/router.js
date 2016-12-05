import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('r', {
    path: 'r/:subreddit'
  });
  this.route('reddit', {
    path: 'reddit/:subreddit'
  });
  this.route('dashboard');
  this.route('about');
});

export default Router;
