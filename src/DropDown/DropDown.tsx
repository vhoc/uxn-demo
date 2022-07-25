import React, { HTMLAttributes, ReactNode } from 'react'
import './DropDown.css'

export interface Props extends HTMLAttributes<HTMLLIElement> {
    variant: 'primary' | 'secondary'
}

export const DropDown = ( {...props}: Props ) => {
    return (
        <nav>
            <ul className='menus'>
                <li className='menu-items'>
                    
                </li>
            </ul>
        </nav>
    )
}