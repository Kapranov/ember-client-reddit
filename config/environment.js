/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-client-reddit',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-cli-lightbox': {
      lightboxOptions: {
        alwaysShowNavOnTouchDevices:  false,
        albumLabel:                   "Image %1 of %2",
        disableScrolling:             true,
        fadeDuration:                 500,
        fitImagesInViewport:          true,
        maxWidth:                     undefined,
        maxHeight:                    undefined,
        positionFromTop:              50,
        resizeDuration:               700,
        showImageNumberLabel:         true
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
