import Ember from 'ember';

export default Ember.Component.extend({
  details: false,

  actions: {
    showDetails: function() {
      this.set('details', true);
    },

    hideDetails: function() {
      this.set('details', false);
    }
  }
});
