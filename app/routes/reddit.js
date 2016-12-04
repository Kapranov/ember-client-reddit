import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON(`https://www.reddit.com/r/${params.subreddit}.json`);
  },

  afterModel: function(reddit) {
    reddit.subreddit = reddit.data.children[0].data.subreddit || '';
  }
});
