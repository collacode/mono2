import react from '@vitejs/plugin-react';
import { defineConfig, type UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';

type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
    plugins: [react()],
    test: {
        environment: 'jsdom',
    },
};

export default defineConfig(config);
