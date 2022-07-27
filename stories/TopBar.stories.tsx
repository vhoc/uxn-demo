import React from "react"
import { Meta, Story } from '@storybook/react'
import { TopBar, Props } from '../src/TopBar/TopBar'
import { menuItems } from '../src/data'

const meta: Meta = {
    title: 'TopBar',
    component: TopBar,
}

export default meta

const Template: Story<Props> = args => <TopBar {...args} />

export const Default = Template.bind({})
Default.args = {
    menus: menuItems,
    children: 'This is a nav item',
}