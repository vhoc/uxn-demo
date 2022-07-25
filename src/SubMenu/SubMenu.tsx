import React from 'react'
import { HTMLAttributes } from 'react'
import { DropDown } from '../DropDown/DropDown'
import { Properties } from '../data'
import '../DropDown/DropDown.css'
import './SubMenu.css'

export interface Props extends HTMLAttributes<HTMLUListElement> {
    submenus?: Properties
    dropdown?: any
    depthLevel?: number
}

export const SubMenu = ({ submenus, dropdown, depthLevel = 0 }: Props): JSX.Element => {
    depthLevel = depthLevel + 1
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
    console.log(`SubMenu Depth Level ${depthLevel}`)

    return (
        <ul className={ `dropdown ${dropdownClass} ${ dropdown ? 'show' : '' }` }>
        {
            submenus && submenus.map((submenu: Properties, index: number) => {
                <DropDown variant={'primary'} items={submenu} key={index} depthLevel={depthLevel}/>
            })
        }
        </ul>
    )
}