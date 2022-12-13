import type { UserConfig } from '@commitlint/types';

// See https://commitlint.js.org/#/reference-configuration for more info about the commitlint config

const Configuration: UserConfig = {
  // Resolve and load @commitlint/config-conventional from node_modules. Referenced packages must be installed
  extends: ['@commitlint/config-conventional'],

  // Any rules defined here will override rules from the extended config
  rules: {
    'subject-case': [2, 'always', ['sentencecase']],
    'scope-enum': [
      2,
      'always',
      ['ux/ui', 'security', 'literals', 'assets', 'accessibility'],
    ],
  },
};

module.exports = Configuration;
