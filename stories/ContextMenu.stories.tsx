import React from "react"
import { Meta, Story } from '@storybook/react'
import { ContextMenu, Props } from '../src/ContextMenu/ContextMenu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faPen, faDownload, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { ContextMenuItem } from '../src/ContextMenu/ContextMenuItem'

const meta: Meta = {
    title: 'UI Components/ContextMenu/ContextMenu',
    component: ContextMenu,
}

export default meta

const Template: Story<Props> = args => <ContextMenu {...args} />

export const Default = Template.bind({})
Default.args = {
    children: [
        <ContextMenuItem icon={ <FontAwesomeIcon icon={faBars} /> } label="View Details"/>,
        <ContextMenuItem icon={ <FontAwesomeIcon icon={faPen} /> } label="Change Name" onClick={() => alert('Change Name triggered!')}/>,
        <ContextMenuItem icon={ <FontAwesomeIcon icon={faDownload} /> } label="Download"/>,
        <ContextMenuItem icon={ <FontAwesomeIcon icon={faTrashAlt} /> } label="Delete File"/>
    ],
}