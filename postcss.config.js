// postcss.config.js
module.exports = {
  plugins: {
    'postcss-nesting': {},      // الأفضل وضعه قبل tailwind
    tailwindcss: {},
    autoprefixer: {},
  },
};
