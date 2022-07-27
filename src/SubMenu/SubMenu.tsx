import React, { HTMLAttributes, useState, useEffect, useRef } from 'react'
import { DropDown } from '../DropDown/DropDown'
import './SubMenu.css'

export interface Props extends HTMLAttributes<HTMLLIElement> {
    items?: any
}

export const SubMenu = ({ items = { title: "No menus found" }, ...props}: Props) => {

    console.warn(items)

    const [dropdown, setDropDown] = useState<Boolean>(false)

    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (dropdown && ref.current?.contains(event.target as Node)) {
                setDropDown(false)
            }
        }

        document.addEventListener(`mousedown`, handler)
        document.addEventListener(`touchstart`, handler)

        return () => {
            document.removeEventListener(`mousedown`, handler)
            document.removeEventListener(`touchstart`, handler)
        }
    }, [dropdown])

  return (
    <li className='menu-items' ref={ref}>
    {
        items.submenu ? (
            <>
                <button
                    type='button'
                    aria-haspopup='menu'
                    aria-expanded={dropdown ? 'true' : 'false'}
                    onClick={() => setDropDown((prevState)=> !prevState)}
                >
                    {items.title}{" "}
                </button>
                <DropDown dropdown={dropdown}/>
            </>
        ) : (
            <a href='#'>{items.title}</a>
        )
    }
    </li>
  )
}