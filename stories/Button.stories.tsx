import React from "react"
import { Meta, Story } from '@storybook/react'
import { Button, Props } from '../src/Button/Button'
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const meta: Meta = {
    title: 'UI Components/Button',
    component: Button,
}

export default meta

const Template: Story<Props> = args => <Button {...args} />

export const Default = Template.bind({})

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    size: 'md',
    label: 'primary button',
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    size: 'md',
    label: 'secondary button',
}

export const Disabled = Template.bind({})
Disabled.args = {
    variant: 'primary',
    size: 'md',
    label: 'disabled button',
    disabled: true,
}

export const Icon = Template.bind({})
Icon.args = {
    icon: faCoffee,
}