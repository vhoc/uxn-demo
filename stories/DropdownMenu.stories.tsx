import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavBar } from "../src/NavBar/NavBar";
import { Default } from "./MenuItems.stories";

import { menuItems } from "../src/data";

export default {
    title: 'DropdownMenu',
    component: NavBar,
} as ComponentMeta<typeof NavBar>

export const Template: ComponentStory<typeof NavBar> = args => <NavBar { ...args }/>

export const OneLevel = Template.bind({})
OneLevel.args = {
    menuItems: menuItems,
    children: <Default {...Default.args}/>
}