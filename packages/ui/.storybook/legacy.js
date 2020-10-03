import { configure } from '@storybook/react'

configure(require.context('../dist', true, /\.stories\.js$/), module)
