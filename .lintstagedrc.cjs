const path = require('path');

const buildRootPrettierCommand = (filenames) =>
    `yarn run prettier --write ${filenames.join(' ')}`;

const buildEslintCommand = (filenames) =>
    `yarn f run next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`;

// eslint가 prettier도 동작시키므로 필요함
// eslint는
module.exports = {
    './api/**/*': 'yarn a lint',
    './apispec/**/*': 'yarn as lint',
    './components/**/*': 'yarn c lint',
    './frontend/**/*': [buildEslintCommand],
    './*': [buildRootPrettierCommand],
};
