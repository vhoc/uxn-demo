import React, { CSSProperties, HTMLAttributes, useState } from 'react'
import { TtableRows, TtableColumns } from '../data'
import { Pagination } from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

export interface Props extends HTMLAttributes<HTMLTableElement> {
    columns: TtableColumns[]
    rows: TtableRows[]
    tableStyle?: CSSProperties
    headingRowStyle: CSSProperties
    rowStyle?: CSSProperties
    headingStyle?: CSSProperties
    cellStyle?: CSSProperties
    rowsPerPage?: number
}

export const DataTable = ({columns, rows, tableStyle = {}, headingRowStyle = {}, rowStyle = {}, headingStyle = {}, cellStyle = {}, rowsPerPage = 10, ...props}: Props): JSX.Element => {

    const [activePage, setActivePage] = useState<number>(1)
    const count: number = rows.length
    const totalPages: number = Math.ceil(count / rowsPerPage)
    const calculatedRows = rows.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)

    return (
        <table cellPadding={0} cellSpacing={0} {...props} style={tableStyle}>
            <thead>
                <tr style={headingRowStyle}>
                    {
                        columns.map(column => {
                            return <th key={column.accessor} style={headingStyle}><FontAwesomeIcon icon={faSort} /> {column.label}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    calculatedRows.map((row: any) => {
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
            <tfoot>
                <tr>
                    <td colSpan={columns.length}>
                        <Pagination
                            activePage={activePage}
                            count={count}
                            rowsPerPage={rowsPerPage}
                            totalPages={totalPages}
                            setActivePage={setActivePage}
                        />
                    </td>
                </tr>
            </tfoot>
        </table>
  )
}