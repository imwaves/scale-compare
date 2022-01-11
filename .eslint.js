module.exports = {
  rules: {
      'vue/singleline-html-element-content-newline': 0,
      'vue/html-closing-bracket-newline': 0,
      'vue/max-attributes-per-line': [2,
        {
          'singleline': 3,
          'multiline': {
            'max': 3,
            'allowFirstLine': true
          }
        }
      ],
      'vue/component-tags-order': 0,
      'vue/no-deprecated-v-bind-sync': 0,
      'vue/no-deprecated-slot-attribute': 0,
      'vue/require-default-prop': 0,
      'import/extensions': 0,
      // 'vue/html-self-closing': ['error', {
      //   'html': {
      //     'void': 'never',
      //     'normal': 'never',
      //     'component': 'any'
      //   },
      //   'svg': 'always',
      //   'math': 'always'
      // }],
      // 'vue/no-parsing-error': ['error', {
      //   'x-invalid-end-tag': false,
      // }],

      'no-extra-semi': 0,
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'no-unused-vars': ['error', {
        'varsIgnorePattern': '\_',
        'args': 'after-used',
        'ignoreRestSiblings': true ,
      }],
      'eslint-plugin-jsx-a11y': 0,

      'arrow-parens': 0,
      'curly': ['error', 'multi-or-nest'],
      'class-methods-use-this': 0,
      'nonblock-statement-body-position': 0,
      'object-curly-newline': 0,
      'semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
      'consistent-return': 0,
      'global-require': 0,
      'spaced-comment': 0,
      'no-bitwise': 0,
      'no-underscore-dangle': 0,
      'template-curly-spacing': ['warn', 'always'],
      'no-else-return': 0,
      // 'curly': ['error', 'multi-or-nest'],
      'curly': 0,
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'brace-style': 0,
      'implicit-arrow-linebreak': 0,
      'function-paren-newline': 0,
      'no-shadow': ['warn'],
      'no-param-reassign': 0,
      'no-confusing-arrow': 0,
      'no-use-before-define': 0,
      'quote-props': 0,
      'no-unused-expressions': 1,
      'no-return-assign': 0,
      'no-restricted-syntax': 0,
      'no-shadow': 0,
      'no-plusplus': 0,
      'import/no-named-as-default': 0,
      'new-parens': 0,
      'no-floating-decimal': 0,
      'no-nested-ternary': 0,
      'no-multiple-empty-lines': 0,
      'vue/multiline-html-element-content-newline': 0,

      'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        'fetch',
        'asyncData',
        'data',
        'methods',
        'watch',
        'computed',
        'LIFECYCLE_HOOKS',
        ['props', 'propsData'],
        ['components', 'directives', 'filters'],
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }]
  }
}