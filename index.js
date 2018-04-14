#!/usr/bin/env node

const env = require('yeoman-environment').createEnv();

console.log('');
env.register(require.resolve('generator-wix-js/generators/app/index'));
env.run(['wix-js', ...process.argv.slice(2)].join(' '), {'skip-update-check': true});

