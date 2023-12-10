# Eslint Config by @mgcrea

<!-- markdownlint-disable MD033 -->
<p align="center">
  <a href="https://www.npmjs.com/package/@mgcrea/eslint-config-node">
    <img src="https://img.shields.io/npm/v/@mgcrea/eslint-config-node.svg?style=for-the-badge" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/eslint-config-node">
    <img src="https://img.shields.io/npm/dt/@mgcrea/eslint-config-node.svg?style=for-the-badge" alt="npm total downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/eslint-config-node">
    <img src="https://img.shields.io/npm/dm/@mgcrea/eslint-config-node.svg?style=for-the-badge" alt="npm monthly downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@mgcrea/eslint-config-node">
    <img src="https://img.shields.io/npm/l/@mgcrea/eslint-config-node.svg?style=for-the-badge" alt="npm license" />
  </a>
  <br />
  <a href="https://github.com/mgcrea/eslint-config/actions/workflows/main.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/mgcrea/eslint-config/main.yml?style=for-the-badge&branch=master" alt="build status" />
  </a>
  <a href="https://depfu.com/github/mgcrea/eslint-config">
    <img src="https://img.shields.io/depfu/dependencies/github/mgcrea/eslint-config?style=for-the-badge" alt="dependencies status" />
  </a>
</p>
<!-- markdownlint-enable MD037 -->

## Features

Standard eslint config to cleanup your dependencies!

## Usage

```sh
npm --save-dev @mgcrea/eslint-config-node
# or
pnpm add --save-dev @mgcrea/eslint-config-node
```

- `.eslintrc`

```json
{
  "extends": ["@mgcrea/node"],
  "rules": {}
}
```

## Presets

Currently supported presets include:

- `@mgcrea/eslint-config-astro` for [Astro](https://astro.build)
- `@mgcrea/eslint-config-node` for [Node.js](https://nodejs.org)
- `@mgcrea/eslint-config-react` for [React](https://react.dev)
- `@mgcrea/eslint-config-react-native` for [React Native](https://reactnative.dev)

## Authors

- [Olivier Louvignes](https://github.com/mgcrea) <<olivier@mgcrea.io>>

### Credits

Heavily inspired from

- [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) by
  [vite](https://github.com/orgs/vitejs/people)

## License

```txt
The MIT License

Copyright (c) 2020 Olivier Louvignes <olivier@mgcrea.io>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
