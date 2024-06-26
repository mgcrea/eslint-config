/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["@typescript-eslint", "@react-native", "react-native"],
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["*.{spec,test}.{js,ts,tsx}", "**/__{mocks,tests}__/**/*.{js,ts,tsx}"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
  globals: {
    __DEV__: true,
    __dirname: false,
    __fbBatchedBridgeConfig: false,
    AbortController: false,
    Blob: true,
    alert: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    clearImmediate: true,
    clearInterval: false,
    clearTimeout: false,
    console: false,
    document: false,
    ErrorUtils: false,
    escape: false,
    Event: false,
    EventTarget: false,
    exports: false,
    fetch: false,
    File: true,
    FileReader: false,
    FormData: false,
    global: false,
    Headers: false,
    Intl: false,
    Map: true,
    module: false,
    navigator: false,
    process: false,
    Promise: true,
    requestAnimationFrame: true,
    requestIdleCallback: true,
    require: false,
    Set: true,
    setImmediate: true,
    setInterval: false,
    setTimeout: false,
    queueMicrotask: true,
    URL: false,
    URLSearchParams: false,
    WebSocket: true,
    window: false,
    XMLHttpRequest: false,
  },
};
