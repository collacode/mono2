import path from 'node:path';

import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const config = {
    plugins: [react(), tsconfigPaths()],
    test: {
        setupFiles: path.resolve(__dirname, './__tests__/setup.ts'),
        environment: 'jsdom',
    },
};

export default defineConfig(config);
