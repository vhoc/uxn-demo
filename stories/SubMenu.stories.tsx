import React from "react"
import { Meta, Story } from '@storybook/react'
import { SubMenu, Props } from '../src/SubMenu/SubMenu'
import { menuItems } from "../src/data"

const meta: Meta = {
    title: 'SubMenu',
    component: SubMenu,
}

export default meta

const Template: Story<Props> = args => <SubMenu {...args} />

export const Default = Template.bind({})
Default.args = {
    items: menuItems[0],
    children: 'This is a nav item',
}