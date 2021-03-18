module.exports = {
    webpack: (config) => {
      config.node = {fs:"empty"}
      return config
    },
    webpackDevMiddleware: config => {
      return config
    },
  }
