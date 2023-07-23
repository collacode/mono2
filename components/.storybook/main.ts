import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const wrapForPnp = (packageName: string) => path.dirname(require.resolve(path.join(packageName, 'package.json')));

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        // @ts-ignore
        name: wrapForPnp('@storybook/react-vite'),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};
export default config;
