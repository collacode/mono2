module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                // ESLint의 실행 기준이 root임
                project: './frontend/tsconfig.json',
            },
        },
    },
    plugins: ['testing-library', 'jest-dom'],
};
