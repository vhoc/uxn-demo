import React, { HTMLAttributes } from 'react'
import { MenuItems } from '../MenuItems/MenuItems'
import { Properties } from '../data'
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import '../styles.css'


export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** Array of objects with the following scructure:
     * [{ icon?, title, style?, action?, submenu?  }]  
     * - icon: [Optional], Type: IconDefinition (FontAwesome)
     * - title: [Mandatory], Type: string
     * - style: [Optional], Type: object
     * - action: [Optional], Type: Function
     * - submenu: [Optional], Properties[] (Recursive)
     */
    menuItems?: Properties[]
}

/** A Navigation bar with a multilevel dynamic dropdown menu. */
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