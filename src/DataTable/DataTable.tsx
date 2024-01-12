import React, { CSSProperties, HTMLAttributes, useState, useMemo } from 'react'
import { TtableRows, TtableColumns } from '../data'
import { Pagination } from './Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

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
    const [optionRowsPerPage, setOptionRowsPerPage] = useState<number>(rowsPerPage)
    const [sort, setSort] = useState<{order: string, orderBy: string}>({ order: 'asc', orderBy: 'id' })

    const count: number = rows.length
    const totalPages: number = Math.ceil(count / optionRowsPerPage)

    function isNil(value: any) {
        return typeof value === 'undefined' || value === null
    }
    function isString(value: any) {
        return typeof value === 'string' || value instanceof String
    }
    function isNumber(value: any) {
        return typeof value == 'number' && !isNaN(value)
    }
    function convertDateString(value: any) {
        return value.substr(6, 4) + value.substr(3, 2) + value.substr(0, 2)
    }
    function isBoolean(value: any) {
        return value === true || value === false
    }

    function isDateString(value: any) {
        if (!isString(value)) return false
      
        return value.match(/^\d{2}-\d{2}-\d{4}$/)
      }

    function convertType(value: any) {
        if (isNumber(value)) {
          return value.toString()
        }
      
        if (isDateString(value)) {
          return convertDateString(value)
        }
      
        if (isBoolean(value)) {
          return value ? '1' : '-1'
        }
      
        return value
    }

    const sortRows = (rows: any, sort: any) => {
        return rows.sort((a: any, b: any) => {
            const { order, orderBy } = sort

            if (isNil(a[orderBy])) return 1
            if (isNil(b[orderBy])) return -1

            const aLocale: string = convertType(a[orderBy])
            const bLocale: string = convertType(b[orderBy])

            if (order === 'asc') {
                return aLocale.localeCompare(bLocale, 'en', { numeric: isNumber(b[orderBy]) })
            } else {
                return bLocale.localeCompare(aLocale, 'en', { numeric: isNumber(a[orderBy]) })
            }
        })
    }

    const sortedRows = useMemo(() => sortRows(rows, sort), [rows, sort])
    const calculatedRows = sortedRows.slice((activePage - 1) * optionRowsPerPage, activePage * optionRowsPerPage)

    const handleSort = (accessor: any) => {
        setActivePage(1)
        setSort( (prevSort: {order: string; orderBy: string; }) => ({
            order: prevSort.order === 'asc' && prevSort.orderBy === accessor ? 'desc' : 'asc',
            orderBy: accessor,
        }) )
    }

    return (
        <table cellPadding={0} cellSpacing={0} {...props} style={tableStyle}>
            <thead>
                <tr style={headingRowStyle}>
                    {
                        columns.map(column => {
                            const sortIcon = () => {
                                if (column.accessor === sort.orderBy) {
                                    if (sort.order === 'asc') {
                                        return <FontAwesomeIcon icon={faSortUp} />
                                    }
                                    return <FontAwesomeIcon icon={faSortDown} />
                                } else {
                                    return <FontAwesomeIcon icon={faSort} />
                                }
                            }
                            return (
                                <th key={column.accessor} style={headingStyle}>
                                    <button
                                        style={ {border: 'none', background: 'none', color: '#94A3B8', cursor: 'pointer'} }
                                        onClick={() => handleSort(column.accessor)}>
                                            {sortIcon()}
                                    </button>
                                    {column.label}
                                </th>
                            )
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
                    <td className="table-footer" colSpan={columns.length}>
                        <Pagination
                            activePage={activePage}
                            count={count}
                            rowsPerPage={optionRowsPerPage}
                            totalPages={totalPages}
                            setActivePage={setActivePage}
                            setOptionRowsPerPage={setOptionRowsPerPage}
                        />
                    </td>
                </tr>
            </tfoot>
        </table>
  )
}