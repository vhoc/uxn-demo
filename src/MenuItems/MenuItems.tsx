import React, { HTMLAttributes, useState } from 'react'
import { DropDown } from '../DropDown/DropDown'
import '../styles.css'

export interface Props extends HTMLAttributes<HTMLLIElement> {
    items: {
        icon?: any
        title: string
        style?: object
        submenu?: any
    },
    depthLevel: number
}

export const MenuItems = ({items, depthLevel, ...props}: Props) => {
    //console.log(items)

    const [dropdown, setDropdown] = useState<boolean>(false)

  return (
    <li className='menu-items' {...props}>
    {
        items.submenu ? (
            <>
                <button
                    type='button'
                    aria-haspopup="menu"
                    aria-expanded={dropdown ? 'true' : 'false'}
                    onClick={() => setDropdown((prev) => !prev)}
                >
                    {items.title}{" "}
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className='arrow'/>}
                </button>
                <DropDown
                    submenus={items.submenu}
                    dropdown={dropdown}
                    depthLevel={depthLevel}
                />
            </>
        ) : (
            <a href='/#'>{items.title}</a>
        )
    }
    </li>
  )
}