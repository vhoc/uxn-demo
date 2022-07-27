import React from "react"
import { Meta, Story } from '@storybook/react'
import { DropDown, Props } from '../src/DropDown/DropDown'
import { menuItems } from "../src/data"

const meta: Meta = {
    title: 'DropDown',
    component: DropDown,
}

export default meta

const Template: Story<Props> = args => <DropDown {...args} />

export const Default = Template.bind({})
Default.args = {
    submenus: menuItems[0].submenu,
    children: 'This is a nav item',
}