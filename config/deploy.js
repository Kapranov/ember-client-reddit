module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-client-reddit',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
