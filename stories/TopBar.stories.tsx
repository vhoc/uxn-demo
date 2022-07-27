import React from "react"
import { Meta, Story } from '@storybook/react'
import { TopBar, Props } from '../src/TopBar/TopBar'
import { menuItems } from '../src/data'

const meta: Meta = {
    title: 'TopBar',
    component: TopBar,
}

export default meta

export const Default = () => <TopBar menus={menuItems} />