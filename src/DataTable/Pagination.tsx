import React, { Dispatch, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStepBackward, faStepForward, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import '../styles.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    activePage: number
    count: number
    rowsPerPage: number
    totalPages: number
    setActivePage: Dispatch<number>
}

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage, ...props }: Props): JSX.Element => {

    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage -1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

    return (
        <>
            <div className='pagination' {...props}>

                <button
                    className='btn-pagination btn-pagination-first'
                    disabled={activePage === 1}
                    onClick={() => setActivePage(1)}
                >
                    <FontAwesomeIcon icon={faStepBackward}/>
                </button>

                <button
                    className='btn-pagination btn-pagination-previous'
                    disabled={activePage === 1}
                    onClick={() => setActivePage(activePage - 1)}
                >
                    <FontAwesomeIcon icon={faBackward}/>
                </button>

                <button
                    className='btn-pagination btn-pagination-next'
                    disabled={activePage === totalPages}
                    onClick={() => setActivePage(activePage + 1)}
                >
                    <FontAwesomeIcon icon={faForward}/>
                </button>

                <button
                    className='btn-pagination btn-pagination-last'
                    disabled={activePage === totalPages}
                    onClick={() => setActivePage(totalPages)}
                >
                    <FontAwesomeIcon icon={faStepForward}/>
                </button>

            </div>

            <div>[DEBUG] Page {activePage} of {totalPages}</div>
            <div>[DEBUG] Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}</div>

        </>
    )
}