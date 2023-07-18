module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                // ESLint의 실행 기준이 root임
                project: './components/tsconfig.json',
            },
        },
    },
    plugins: [
        'testing-library',
        'jest-dom',
        'react-refresh'
    ],
    rules: {
        'react-refresh/only-export-components': 'warn',
    },
};
