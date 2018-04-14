const Generator = require('generator-wix-js/generators/app/index');
const env = require('yeoman-environment').createEnv();
new Generator(process.argv.slice(2), {env, resolved: require.resolve('generator-wix-js/generators/app/index')}).run();
