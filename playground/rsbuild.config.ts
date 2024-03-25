import { defineConfig } from '@rsbuild/core';
import { pluginPosthog } from '../src';

export default defineConfig({
  plugins: [pluginPosthog({
    apiHost: 'xxxx',
    apiKey: 'xxxx'
  })],
});
