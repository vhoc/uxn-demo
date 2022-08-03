import React, { CSSProperties } from 'react'
import { TtableRows, TtableColumns } from '../data'

export interface Props {
    columns: TtableColumns[]
    rows: TtableRows[]
    tableStyle?: CSSProperties
    headingRowStyle: CSSProperties
    rowStyle?: CSSProperties
    headingStyle?: CSSProperties
    cellStyle?: CSSProperties
}

export const DataTable = ({columns, rows, tableStyle = {}, headingRowStyle = {}, rowStyle = {}, headingStyle = {}, cellStyle = {}, ...props}: Props): JSX.Element => {

    return (
        <table cellPadding={0} cellSpacing={0} {...props} style={tableStyle}>
            <thead>
                <tr style={headingRowStyle}>
                    {
                        columns.map(column => {
                            return <th key={column.accessor} style={headingStyle}>{column.label}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row: any) => {
                        return (
                            <tr key={row.id} style={rowStyle}>
                                {
                                    columns.map((column: TtableColumns) => {
                                        return <td
                                            key={column.accessor}
                                            style={cellStyle}
                                        >{row[column.accessor]}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
  )
}