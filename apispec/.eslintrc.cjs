module.exports = {
    rules: {
        'import/no-cycle': ['error', { maxDepth: 1 }],
        'import/no-self-import': 'error',
    },
};
