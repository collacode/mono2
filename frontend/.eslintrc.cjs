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
    overrides: [
        {
            files: ['__e2e__/**'],
            rules: {
                'testing-library/prefer-screen-queries': 'off',
            },
        },
    ],
    plugins: ['testing-library', 'jest-dom'],
    ignorePatterns: [
        '**/.next/**',
        '**/playwright-report/**',
        '**/test-results/**',
        '**/coverage/**',
    ],
};
