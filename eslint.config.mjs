import astroParser from 'astro-eslint-parser'
import pluginAstro from 'eslint-plugin-astro'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import pluginSolid from 'eslint-plugin-solid'
import pluginTailwind from 'eslint-plugin-tailwindcss'
import pluginTypescript from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['dist/'],
  },
  ...pluginTypescript.configs.recommended,
  ...pluginTailwind.configs['flat/recommended'],
  pluginSolid.configs['flat/recommended'],
  pluginPrettier,
  ...pluginAstro.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'no-console': 'warn',

      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
        },
      ],

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/triple-slash-reference': 'off',

      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],

      'tailwindcss/classnames-order': 'error',
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/migration-from-tailwind-2': 'error',
      'tailwindcss/no-custom-classname': 'error',
      'solid/reactivity': 'off',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'solid/prefer-for': 'off',
      'solid/self-closing-comp': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro'],
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
    rules: {
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
    },
  },
]
