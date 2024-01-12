// async function supportCssModules(config) {
//   // console.log('1=================================')
//   // console.log('>>>config', config.module.rules)
//   // console.log('1=================================')

//   config.module.rules.find(
//     (rule) => rule.test.toString() === '/\\.css$/'
//   ).exclude = /\.module\.css$/

//   config.module.rules.push({
//     test: /\.module\.css$/,
//     use: [
//       'style-loader',
//       {
//         loader: 'css-loader',
//         options: {
//           modules: true,
//         },
//       },
//     ],
//   })

//   return config
// }

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-docs', '@storybook/addon-docs/blocks', '@storybook/theming', "storybook-css-modules"],
  //staticDirs: ['../public'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  // FIXME: Support CSS Modules for Storybook
  // webpackFinal: supportCssModules,
};

