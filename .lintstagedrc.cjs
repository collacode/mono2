const path = require('path');

const buildEslintCommand = (filenames) =>
    `yarn f run next lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`;

// eslint가 실행하는 prettier는 eslint가 지원하는 확장자에만 실행되므로, prettier도 실행해줘야 함
// Root 폴더는 Root 폴더에 속한 파일에 대해서 prettier만 실행
module.exports = {
    // 함수로 전달해서 각 패키지에 대해 1회만 명령을 실행하게
    // https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
    './api/**/*': () => 'yarn a lint',
    './apispec/**/*': () => 'yarn as lint',
    './components/**/*': () => 'yarn c lint',
    './frontend/**/*': [buildEslintCommand],
    './*.*': () => 'yarn lint:r',
};
