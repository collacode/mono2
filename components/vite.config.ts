import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = {
    plugins: [react(), tsconfigPaths()],
};

export default defineConfig(config);
