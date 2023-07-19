/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.experiments.topLevelAwait = true;
        return config;
    },
    reactStrictMode: true,
    transpilePackages: ['@collacode/apispec'],
};

module.exports = nextConfig;
