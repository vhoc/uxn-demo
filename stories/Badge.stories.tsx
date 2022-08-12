import React from "react"
import { Meta, Story } from '@storybook/react'
import { Badge, Props } from '../src/Badge/Badge'

const meta: Meta = {
    title: 'UI Components/Badge',
    component: Badge,
}

export default meta

const Template: Story<Props> = args => <Badge {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'primary',
    label: 'primary',
}

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    label: 'primary',
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    label: 'success',
}

export const Warning = Template.bind({})
Warning.args = {
    variant: 'warning',
    label: 'warning',
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    label: 'danger',
}