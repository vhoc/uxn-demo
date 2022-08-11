import React from "react"
import { Meta, Story } from '@storybook/react'
import { ContextMenuItem, Props } from '../src/ContextMenu/ContextMenuItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const meta: Meta = {
    title: 'UI Components/ContextMenu/ContextMenuItem',
    component: ContextMenuItem,
}

export default meta

const Template: Story<Props> = args => <ContextMenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
    icon: <FontAwesomeIcon icon={faBars} />,
    label: 'Single Context Item',
    onClick: () => alert('Action triggered!'),
}