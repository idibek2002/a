const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [
    presets.imports({
      sort: {
        newline: 'always',
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Library imports
          ['^[^@\\.]'],
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    }),
    presets.prettier({
      trailingComma: 'es5',
      arrowParens: 'always',
      bracketSpacing: true,
      endOfLine: 'lf',
      insertPragma: false,
      proseWrap: 'preserve',
      quoteProps: 'as-needed',
      semi: true,
      semicolons: true,
      singleQuote: true,
      tabWidth: 2,
    }),
    presets.typescript({ tsconfig: 'tsconfig.json' }),
    presets.react({ version: 'detect' }),
    presets.node(),
  ],
  extend: {
    rules: {
      'unicorn/no-nested-ternary': 'off',
      'unicorn/prefer-number-properties': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'jsx-a11y/no-static-element-interactions': [
        'warn',
        {
          handlers: [
            'onClick',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
          ],
          allowExpressionValues: true,
        },
      ],
      'jsx-a11y/label-has-associated-control': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'warn',
      'array-callback-return': 'warn',
      curly: 'warn',
    },
  },
});