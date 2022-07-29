import React from "react"
import { Meta, Story } from '@storybook/react'
import { MenuItems, Props } from '../src/MenuItems/MenuItems'
import { menuItems } from '../src/data'

const meta: Meta = {
    title: 'MenuItems',
    component: MenuItems,
}

export default meta

const Template: Story<Props> = args => <MenuItems {...args} />

export const Default = Template.bind({})
Default.args = {
    items: menuItems[0].submenu,
    children: 'This is a nav item',
}