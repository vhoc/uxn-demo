import React, { ReactNode, HTMLAttributes } from 'react'
import { MenuItems } from '../MenuItems/MenuItems'
import { Properties } from '../data'
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import '../styles.css'

export interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    menuItems?: Properties[]
}

export const NavBar = ({menuItems = [{ icon: faTimes, title: `No menus found` }], ...props}: Props) : JSX.Element => {

    //console.warn(menuItems)
    const depthLevel: number = 0

    return (
        <div className='nav-area' {...props}>
            <nav>
                <ul className='menus'>
                {
                    menuItems.map((menu, index) => {
                        return (
                            <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
                        )
                    })
                }
                </ul>
            </nav>
        </div>
    )
}