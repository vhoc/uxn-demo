import { themes } from "@storybook/theming"; 

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters



export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      method: '',
      order: [ 'Intro', 'Branding', 'UI Components', 'Data output' ],
    },
  },
};