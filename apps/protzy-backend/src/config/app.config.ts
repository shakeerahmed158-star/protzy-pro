export default () => ({

  app: {

    name:
      process.env.APP_NAME || 'protzy',

    env:
      process.env.NODE_ENV || 'development',

    port:
      parseInt(
        process.env.PORT || '3000',
        10,
      ),

    apiPrefix:
      process.env.API_PREFIX || 'api',

  },

});