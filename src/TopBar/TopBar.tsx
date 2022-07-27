import React, { ReactNode, HTMLAttributes } from 'react'
import { Properties } from '../data'
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import './TopBar.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    menus?: Properties[]
}

export const TopBar = ({menus = [{ icon: faTimes, title: `No menus found` }], ...props}: Props) => {
  return (
    <div className='nav-area' {...props}>
        <nav>
            <ul className='menus'>
            {
                menus &&
                menus.map((menu, index) => {
                    return (
                        <li className='menu-items' key={index}>
                            <a href='#'>{menu.title}</a>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    </div>
  )
}