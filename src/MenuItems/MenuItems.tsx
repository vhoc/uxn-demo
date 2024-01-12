import React, { HTMLAttributes, useState, useEffect, useRef } from 'react'
import { DropDown } from '../DropDown/DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../styles.css'

export interface Props extends HTMLAttributes<HTMLLIElement> {
    items: {
        icon?: any
        title: string
        style?: object
        submenu?: any
        action?: any
    },
    depthLevel: number
}

export const MenuItems = ({items, depthLevel, ...props}: Props): JSX.Element => {
    //console.log(items)
    const ref = useRef<HTMLLIElement>(null)
    const [dropdown, setDropdown] = useState<boolean>(false)

    useEffect(()=> {
        const handler = (event: MouseEvent|TouchEvent ) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false)
            }
        }

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [dropdown])

    return (
        <li className='menu-items' {...props} ref={ref}>
        {
            items.submenu ? (
                <>
                    <button
                        type='button'
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                       <span className="buttonLayout">
                            <span>
                                <span style={ { display: 'flex', gap: '8px' } }>
                                    <span>{ items.icon ? <FontAwesomeIcon icon={items.icon}/> : '' }</span>
                                    <span>{ items.title }{" "}</span>
                                </span>
                            </span>

                            
                            <span>
                            { depthLevel > 0 ? <span><FontAwesomeIcon icon={faChevronRight}/></span> : <span><FontAwesomeIcon icon={faChevronDown}/></span> }
                            </span>

                        </span>
                    </button>
                    <DropDown
                        submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <button className="singleMenuItem" style={ items.style } onClick={items.action}>
                    <span style={ { display: 'flex', gap: '8px' } }>
                        <span>{ items.icon ? <FontAwesomeIcon icon={items.icon}/> : '' }</span>
                        <span>{ items.title }</span>
                    </span>
                    <span></span>                    
                </button>
            )
        }
        </li>
  )
}