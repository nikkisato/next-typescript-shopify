module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    'postcss-nested',
    'postcss-css-variables',
    [
      'postcss-preset-env',
      {
        "autoprefixer": {
          "flexbox": 'no-2009',
        },
        "stage": 0,
        "features": {
          'custom-properties': false,
          'nesting-rules': true,
        },
      },
    ],
  ],
}