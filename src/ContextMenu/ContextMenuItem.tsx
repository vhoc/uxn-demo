import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLLIElement> {
    icon?: JSX.Element
    label: string
    children?: ReactNode
}

export const ContextMenuItem = ({icon, label, ...props}: Props): JSX.Element => {
  return (
    <>
        <li className='menu-items context-menu-item' {...props}>
            <button
                type='button'
            >
                <span className="buttonLayout">
                    <span>
                        <span style={ { display: 'flex', gap: '20px' } }>
                            <span className='context-menu-item-icon'>{icon && icon}</span>
                            <span>{label}{" "}</span>
                        </span>
                    </span>
                </span>
            </button>
        </li>
    </>
  )
}