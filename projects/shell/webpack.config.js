const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    "@sentry/angular": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "^9.5.0",
      },
  },

});
