import React from "react"
import { Meta, Story } from '@storybook/react'
import { Alert, Props } from '../src/Alert/Alert'

const meta: Meta = {
    title: 'UI Components/Alert',
    component: Alert,
}

export default meta

const Template: Story<Props> = args => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
    variant: 'info',
    title: 'Default alert',
    subtitle: 'This is a little subtitle',
    text: 'Are you sure you want to delete this file from the So.Ai platform?  All analyses that reference this file will be frozen until a new file is configured.  This action cannot be undone.',
    confirmationButton: 'Default',
    cancelButton: true,
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    title: 'Success alert',
    subtitle: 'This is a little subtitle',
    text: 'Are you sure you want to delete this file from the So.Ai platform?  All analyses that reference this file will be frozen until a new file is configured.  This action cannot be undone.',
    confirmationButton: 'OK',
    cancelButton: false,
}

export const Warning = Template.bind({})
Warning.args = {
    variant: 'warning',
    title: 'Warning alert',
    subtitle: 'This is a little subtitle',
    text: 'Are you sure you want to delete this file from the So.Ai platform?  All analyses that reference this file will be frozen until a new file is configured.  This action cannot be undone.',
    confirmationButton: 'I understand',
    cancelButton: true,
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    title: 'Danger alert',
    subtitle: 'This is a little subtitle',
    text: 'Are you sure you want to delete this file from the So.Ai platform?  All analyses that reference this file will be frozen until a new file is configured.  This action cannot be undone.',
    confirmationButton: 'Delete',
    cancelButton: true,
}

export const Info = Template.bind({})
Info.args = {
    variant: 'info',
    title: 'Info alert',
    subtitle: 'This is a little subtitle',
    text: 'Are you sure you want to delete this file from the So.Ai platform?  All analyses that reference this file will be frozen until a new file is configured.  This action cannot be undone.',
    confirmationButton: 'OK',
    cancelButton: false,
}