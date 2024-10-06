import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';

const nodeRules = {
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  'no-console': ['error'],
  'node/no-unsupported-features/es-syntax': 'off',
  'node/no-missing-import': 'off',
};

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      ...nodeRules,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
