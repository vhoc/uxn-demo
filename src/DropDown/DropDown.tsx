import React, { HTMLAttributes, useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { SubMenu } from '../SubMenu/SubMenu'
import { Properties } from '../data'
import './DropDown.css'

export interface Props extends HTMLAttributes<HTMLLIElement> {
    variant: 'primary' | 'secondary',
    items: {
        icon?: any,
        title: String
        style?: Object
        submenu?: Properties[]
    },
    depthLevel?: number
}

export const DropDown = ({items, depthLevel = 0, ...props}: Props ): JSX.Element => {

    const [dropdown, setDropdown] = useState<Boolean>(false)

    const ref = useRef<HTMLLIElement>(null)
    //console.log(`DropDown Depth Level ${depthLevel}`)

    useEffect(() => {
        const handler = (event: MouseEvent|TouchEvent ) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false)
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
                        type="button"
                        className="subButton"
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
                    <SubMenu submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                </>
            ):(
                <a href="/#" className="singleMenuItem" style={ items.style }>
                    <span style={ { display: 'flex', gap: '8px' } }>
                        <span>{ items.icon ? <FontAwesomeIcon icon={items.icon}/> : '' }</span>
                        <span>{ items.title }</span>
                    </span>
                    <span></span>
                    
                </a>
            )
        }
        </li>
    )
}