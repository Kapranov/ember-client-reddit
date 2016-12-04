import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Controller.extend({
  pictures: computed('model.data.children.[]', function() {
    const items = get(this, 'model.data.children').filterBy('data.domain', 'i.imgur.com');

    return items.map((item) => {
      return {
        title: item.data.title,
        url: item.data.url.replace(/^http:\/\//i, 'https://'),
        thumbnail: item.data.thumbnail.replace(/^http:\/\//i, 'https://')
      };
    });
  })
});
