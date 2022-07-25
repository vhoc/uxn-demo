import React from "react"
import { Meta, Story } from '@storybook/react'
import { DropDown, Props } from '../src/DropDown/DropDown'

const meta: Meta = {
    title: 'DropDown',
    component: DropDown,
}

export default meta

export const Default = () => <DropDown variant="primary"/>