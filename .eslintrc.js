module.exports = {
  root: true,
  extends: [
    '@ilios/eslint-config-ember'
  ],
  rules: {
    'ember/routes-segments-snake-case': 0,
    "node/no-extraneous-require": ["error", {
        "allowModules": ["postcss-scss"]
    }],
    'sort-imports': 0,
  }
};
