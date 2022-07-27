import React, { HTMLAttributes } from 'react'
import { Properties } from '../data'

import './TopBar.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    menus: Properties[]
}

export const TopBar = ({menus, ...props}: Props) => {
  return (
    <div className='nav-area' {...props}>
        <nav>
            <ul className='menus'>
            {
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