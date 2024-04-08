import { defineConfig } from '@rsbuild/core';
import { pluginPosthog } from '../src';

export default defineConfig({
  plugins: [
    pluginPosthog({
      apiHost: 'https://us.posthog.com',
      apiKey: 'phc_xxxx',
    }),
  ],
});
