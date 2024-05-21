/* eslint-env node */
// https://postcss.org/docs/
export default {
  plugins: {
    'postcss-flexbugs-fixes': {},
    stylelint: {
      configFile: 'stylelint.config.js',
    },
    'postcss-import': {},
    'postcss-extend': {},
    /** UnComment out if you are not using tailwindcss/nesting */
    // 'postcss-nesting': {},
    /* Comment out if you not want to add TailwindCSS to your project */
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './tailwind.config.js'
    },
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
        'nesting-rules': false,
      },
    },
    'postcss-reporter': {},
  },
};