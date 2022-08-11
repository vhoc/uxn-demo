import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLUListElement> {
    children?: ReactNode
}

export const ContextMenu = ({ children, ...props}: Props): JSX.Element => {
  return (
    <ul className='context-menu-container'{ ...props }>
        { children }
    </ul>
  )
}