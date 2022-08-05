import React, { HTMLAttributes, useState, ReactNode } from 'react'
import { variants, sizes } from '../Style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'warning' | 'danger' | 'cancel'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    icon?: IconProp
    label?: string
    children?: ReactNode
}

export const Button = ({ variant = 'primary', size = 'md', disabled = false, icon, label = 'button', children, ...props }: Props): JSX.Element => {

    const [hover, setHover] = useState<boolean>(false)

    type VariantKey = keyof typeof variants
    const selectedVariant = variant as VariantKey

    type SizeKey = keyof typeof sizes
    const selectedSize = size as SizeKey

    const componentStyle = (hover: boolean): object => ({
        backgroundColor: disabled ? '#e3e9f0' : hover ? variants[selectedVariant].buttonBgColorHover : variants[selectedVariant].buttonBgColor,
        color: disabled ? '#c5cedb' : variants[selectedVariant].buttonFgColor,
        border: `1px solid ${ disabled ? '#e3e9f0' : variants[selectedVariant].buttonBorderColor }`,
        textTransform: 'capitalize',
        minWidth: sizes[selectedSize].minWidth,
        height: sizes[selectedSize].height,
        fontSize: sizes[selectedSize].fontSize,
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
    })

    return (
        <button style={componentStyle(hover)} disabled={disabled} {...props} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>                
                { children }
                { icon && (<FontAwesomeIcon icon={icon} />) }
            </div>
        </button>
        )

  
}