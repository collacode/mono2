// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: 'https://22e8a78caed744fc93c42504b3e86be2@o4504269838614528.ingest.sentry.io/4505582481899520',

    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,

    // You can remove this option if you're not planning to use the Sentry Session Replay feature:
    integrations: [],
});