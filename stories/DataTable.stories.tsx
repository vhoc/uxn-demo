import React from "react"
import { Meta, Story } from '@storybook/react'
import { DataTable, Props } from '../src/DataTable/DataTable'
import { tableColumns, tableData } from "../src/data"

const meta: Meta = {
    title: 'Data output/DataTable',
    component: DataTable,
}

export default meta

const Template: Story<Props> = args => <DataTable {...args} />

export const Default = Template.bind({})
Default.args = {
    columns: tableColumns,
    rows: tableData,
    rowsPerPage: 3,
}