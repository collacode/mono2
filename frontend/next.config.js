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

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs');
const fs = require('fs');

const config = withSentryConfig(
    module.exports,
    {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        // Suppresses source map uploading logs during build
        silent: true,

        org: 'test-r2f',
        project: 'javascript-nextjs',
    },
    {
        // For all available options, see:
        // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Transpiles SDK to be compatible with IE11 (increases bundle size)
        transpileClientSDK: true,

        // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
        tunnelRoute: '/monitoring',

        // Hides source maps from generated client bundles
        hideSourceMaps: true,

        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,

        // lint를 거치고 build가 되기 때문에 긴 lint를 다시 수행할 필요가 없다.
        ignoreDuringBuilds: true,
    },
);

fs.writeFileSync('./next-sentry-webpack-config-3.js', nextConfig.toString());

module.exports = config;
