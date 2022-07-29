import React from "react"
import { Meta, Story } from '@storybook/react'
import { NavBar, Props } from '../src/NavBar/NavBar'
import { menuItems } from '../src/data'

const meta: Meta = {
    title: 'NavBar',
    component: NavBar,
}

export default meta

const Template: Story<Props> = args => <NavBar {...args} />

export const Default = Template.bind({})
Default.args = {
    menuItems: menuItems,
}

export const Empty = Template.bind({})