module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "../src/demo-addon/preset.js",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};
