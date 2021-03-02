#!/usr/bin/env node

console.log('');

const env = require('yeoman-environment').createEnv();
env.on('error', err => {
  console.error('');
  console.error(err.message);
  process.exit(err.code || 1);
});
env.register(require.resolve('@wix/generator-wix-js/generators/app/index'));
env.run(['wix-js', ...process.argv.slice(2)].join(' '), {'skip-update-check': true});

