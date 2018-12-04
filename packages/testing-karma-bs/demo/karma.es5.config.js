const createBaseConfig = require('@open-wc/testing-karma/create-karma-es5.config');

/**
 * An example karma configuration, taking the base config as a start and
 * adding the test files to run. Make sure to support the grep config option
 * to allow running individual tests.
 */
module.exports = (config) => {
  const baseConfig = createBaseConfig(config, '/demo');

  config.set({
    ...baseConfig,
  });
};
