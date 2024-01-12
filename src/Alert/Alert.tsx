import React, { HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faExclamation, faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button'
import { variants } from '../Style'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


export interface Props extends HTMLAttributes<HTMLDivElement> {
    variant?: 'success' | "warning" | "danger" | "info"
    title: string
    subtitle?: string
    text: string
    confirmationButton: string
    cancelButton?: boolean
}

export const Alert = ({variant = 'info', title, subtitle, text, confirmationButton, cancelButton, ...props}: Props) => {

    type VariantKey = keyof typeof variants
        const selectedVariant = variant as VariantKey
    
    const componentStyle = {
        backgroundColor: variants[selectedVariant].alertIconBgColor,
        color: variants[selectedVariant].alertIconFgColor
    }

    interface IIcons {
        [key: string]: IconProp
    }

    const icons: IIcons = {
        success: faCheck,
        warning: faExclamation,
        danger: faExclamationTriangle,
        info: faInfo,
    }

    return (
        <div className='alert-container' {...props}>

            <div className='alert-container-upper'>
                <span style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '100%',
                    ...componentStyle
                }}>
                    <FontAwesomeIcon
                        icon={ icons[selectedVariant] }
                        color={componentStyle.color}
                    />
                </span>
                <h1
                    style={{
                        fontWeight: '600',
                        fontSize: '18px',
                        color: '#2F394D',
                    }}
                >
                    { title }
                </h1>
            </div>

            <div className="alert-container-middle">
                <span style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '40px',
                        height: '40px',
                    }}>
                        
                </span>
                <h3
                    style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        color: '#1E293B',
                    }}
                >
                    { subtitle }
                </h3>
            </div>

            <div className="alert-container-text">  
                <p
                    style={{
                        fontWeight: '400',
                        fontSize: '14px',
                        color: '#64748B',
                    }}
                >
                    { text }
                </p>
            </div>

            <div className="alert-container-footer">
                {
                    cancelButton &&
                        <Button size="md" variant={'cancel'}>Cancel</Button>
                }                
                <Button size='md' variant={variant}>{ confirmationButton }</Button>
            </div>

        </div>
    )
}