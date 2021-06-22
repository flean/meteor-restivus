Package.describe({
  name: 'flean:restivus',
  summary: 'Create authenticated REST APIs in Meteor 0.9+ via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
  version: '0.8.13',
  git: 'https://github.com/flean/meteor-restivus.git'
});


Package.onUse(function (api) {
  // Minimum Meteor version
  api.versionsFrom('METEOR@0.9.0');

  // Meteor dependencies
  api.use('check');
  api.use('coffeescript@2.0.3_4');
  api.use('underscore');
  api.use('accounts-password@1.3.3 || 2.0.0');
  api.use('simple:json-routes@2.1.0');

  api.addFiles('lib/auth.coffee', 'server');
  api.addFiles('lib/iron-router-error-to-response.js', 'server');
  api.addFiles('lib/route.coffee', 'server');
  api.addFiles('lib/restivus.coffee', 'server');

  // Exports
  api.export('Restivus', 'server');
});
