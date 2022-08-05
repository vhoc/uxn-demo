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
    setOptionRowsPerPage: Dispatch<number>
}

export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage, setOptionRowsPerPage, ...props }: Props): JSX.Element => {

    const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage -1) + 1
    const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

    return (
        <div className='pagination-container'>
            <div className='pagination-rows-select'>
                <div className='uxn-select'>
                    <select
                        value={rowsPerPage}
                        onChange={ event => {
                            setOptionRowsPerPage( parseInt(event.target.value))
                            setActivePage(1)
                        } }
                    >
                        <option value={2}>2 Results (Debug)</option>
                        <option value={3}>3 Results (Debug)</option>
                        <option value={10}>10 Results</option>
                        <option value={50}>50 Results</option>
                        <option value={100}>100 Results</option>
                    </select>
                    <span className="focus"></span>
                </div>
                <div className='pagination-status'>
                    Showing {beginning === end ? end : `${beginning} - ${end}`} of {count} results
                </div>
            </div>
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

        </div>
    )
}