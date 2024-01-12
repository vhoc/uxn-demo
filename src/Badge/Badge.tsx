import React from 'react'
import { variants } from '../Style'

export interface Props {
    variant?: 'primary' | 'success' | 'warning' | 'danger'
    label: string
}

export const Badge = ({variant = 'primary', label, ...props}: Props): JSX.Element => {

  type VariantKey = keyof typeof variants
        const selectedVariant = variant as VariantKey
    
    const componentStyle = {
        backgroundColor: variants[selectedVariant].alertIconBgColor,
        color: variants[selectedVariant].alertIconFgColor
    }

  return (
    <>
      &nbsp;
      <span className='badge'{...props} style={componentStyle}>
          { label }
      </span>
      &nbsp;
    </>
  )
}