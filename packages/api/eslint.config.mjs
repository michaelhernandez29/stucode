import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    plugins: {
      jsdoc: jsdoc,
    },
    languageOptions: { sourceType: 'module' },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-unused-vars': 'error',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'max-len': ['error', { code: 120, ignoreTemplateLiterals: true }],
      semi: ['error', 'always'],
      camelcase: ['error', { properties: 'always' }],
      'capitalized-comments': [
        'error',
        'always',
        {
          line: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
          },
          block: {
            ignorePattern: '.*',
            ignoreInlineComments: true,
            ignoreConsecutiveComments: true,
          },
        },
      ],
      complexity: ['error', 3],
      'consistent-return': 'error',
      curly: 'error',
      'default-param-last': 'error',
      'max-params': ['error', 3],
      'no-console': 'error',
      'no-var': 'error',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: true,
          },
        },
      ],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'sort-vars': 'error',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-param-names': 'error',
      'jsdoc/check-tag-names': 'error',
      'jsdoc/check-types': 'error',
      'jsdoc/implements-on-classes': 'error',
      'jsdoc/require-description': 'error',
      'jsdoc/require-jsdoc': [
        'error',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
        },
      ],
      'jsdoc/require-param': 'error',
      'jsdoc/require-param-description': 'error',
      'jsdoc/require-param-name': 'error',
      'jsdoc/require-param-type': 'error',
      'jsdoc/require-returns': 'error',
      'jsdoc/require-returns-check': 'error',
      'jsdoc/require-returns-description': 'error',
      'jsdoc/require-returns-type': 'error',
    },
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
