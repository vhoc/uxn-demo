import React, { HTMLAttributes } from 'react'
import { MenuItems } from '../MenuItems/MenuItems'
import '../styles.css'

export interface Props extends HTMLAttributes<HTMLUListElement> {
    submenus: any
    dropdown: boolean
    depthLevel: number
}

export const DropDown = ({ submenus, dropdown, depthLevel, ...props}: Props): JSX.Element => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`} {...props}>
    {
        submenus.map((submenu: any, index: number) => {
          return (
            <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
          )
            
        })
    }
    </ul>
  )
}