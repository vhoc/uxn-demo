import React, { HTMLAttributes } from 'react'
import './DropDown.css'

export interface Props extends HTMLAttributes<HTMLUListElement> {
    submenus?: any
    dropdown?: any
}

export const DropDown = ({submenus, dropdown, ...props}: Props) => {
    //console.warn(submenus)
    return (
        <ul className={`dropdown ${dropdown ? 'show' : ''}`}>
        {
            submenus && submenus.map((submenu: any, index: number) => (
                <li key={index} className='menu-items'>
                    <a href='#'>{submenu.title}</a>
                </li>
            ) )
        }
        </ul>
    )
}