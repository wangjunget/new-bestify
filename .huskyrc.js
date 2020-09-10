module.exports = {
  hooks: {
    'pre-commit': 'npm run lint',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS'
  }
}
