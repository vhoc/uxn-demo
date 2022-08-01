import React, { HTMLAttributes } from 'react'
import { variants, sizes } from '../Style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'cancel'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    icon?: IconProp
    label?: string
}

export const Button = ({ variant = 'primary', size = 'md', disabled = false, icon, label = 'button', ...props }: Props): JSX.Element => {

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes
    const selectedSize = size as SizeKey

    const componentStyle: object = {
        backgroundColor: disabled ? '#e3e9f0' : variants[selectedVariant].buttonBgColor,
        color: disabled ? '#c5cedb' : variants[selectedVariant].buttonFgColor,
        border: `1px solid ${ disabled ? '#e3e9f0' : variants[selectedVariant].buttonBorderColor }`,
        textTransform: 'capitalize',
        minWidth: sizes[selectedSize].minWidth,
        height: sizes[selectedSize].height,
        fontSize: sizes[selectedSize].fontSize,
        borderRadius: '4px'
    }

    return (
        <button style={componentStyle} disabled={disabled}>
            <span style={{ display: 'flex', justifyContent: icon ? 'space-between' : 'center' }}>                
                <span style={{ width: '100%' }}>{ label }</span>
                { icon && (<span><FontAwesomeIcon icon={icon} /></span>) }
            </span>
        </button>
        )

  
}