module.exports = {
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        jest: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                // ESLint의 실행 기준이 root임
                project: './api/tsconfig.json',
            },
        },
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    ignorePatterns: ['prisma'],
};
