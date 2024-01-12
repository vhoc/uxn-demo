import React from "react"
import { Meta, Story } from '@storybook/react'
import { DraggableList, Props } from '../src/DraggableList/DraggableList'
import { DraggableItem } from '../src/DraggableList/DraggableItem'

const meta: Meta = {
   title: 'UI Components/DraggableList/DraggableList',
   component: DraggableList,
}

export default meta

const Template: Story<Props> = args => <DraggableList {...args} />

export const Default = Template.bind({})
Default.args = {
    width: 480,
    height: 768,
    // children: [
    //     <DraggableItem width={'100%'} image={"https://picsum.photos/48/48"} title={"Draggable Item #1"} description={"This is some text description"} />,
    //     <DraggableItem width={'100%'} image={"https://picsum.photos/48/48"} title={"Draggable Item #2"} description={"This is some text description"} />,
    //     <DraggableItem width={'100%'} image={"https://picsum.photos/48/48"} title={"Draggable Item #3"} description={"This is some text description"} />,
    //     <DraggableItem width={'100%'} image={"https://picsum.photos/48/48"} title={"Draggable Item #4"} description={"This is some text description"} />,
    //     <DraggableItem width={'100%'} image={"https://picsum.photos/48/48"} title={"Draggable Item #5"} description={"This is some text description"} />,
    // ]
}