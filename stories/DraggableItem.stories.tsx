import React from "react"
import { Meta, Story } from '@storybook/react'
import { DraggableItem, Props } from '../src/DraggableList/DraggableItem'

const meta: Meta = {
   title: 'UI Components/DraggableList/DraggableItem',
   component: DraggableItem,
}

export default meta

const Template: Story<Props> = args => <DraggableItem {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Draggable item',
    width: 450,
    image: 'https://picsum.photos/48/48',
    description: 'This is some text description'
}