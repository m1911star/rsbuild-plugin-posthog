# rsbuild-plugin-posthog

rsbuild-plugin-posthog is a Rsbuild plugin for Posthog.

<p>
  <a href="https://npmjs.com/package/rsbuild-plugin-posthog">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-posthog?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add rsbuild-plugin-posthog -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginPosthog } from 'rsbuild-plugin-posthog';

export default {
  plugins: [pluginPosthog({
    apiKey: 'xxx',
    apiHost: 'xxxx'
  })],
};
```

## Options

Here are the available options:

| Name | Type      |
| ---- | --------- |
| apiKey  | `string`  |
| apiHost  | `string` |

## License

[MIT](./LICENSE).
