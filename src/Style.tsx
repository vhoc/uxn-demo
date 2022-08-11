export type TVariant = {
    buttonBgColor?: string
    buttonBgColorHover?: string
    buttonFgColor?: string
    buttonBorderColor?: string
    alertIconBgColor?: string
    alertIconFgColor?: string
}

export type TSize = {
    minWidth: string,
    height: string,
    fontSize: string,
    paddingLeft: string,
    paddingRight: string,
}

export interface IVariant {
    [key: string]: TVariant
}

export interface ISize {
    [key: string]: TSize
}

export const variants: IVariant = {
    primary: {
        buttonBgColor: '#525ae0',
        buttonBgColorHover: '#4248b2',
        buttonFgColor: '#fff',
        buttonBorderColor: '#525ae0',
    },
    secondary: {
        buttonBgColor: '#fff',
        buttonBgColorHover: '#e2e8f0',
        buttonFgColor: '#525ae0',
        buttonBorderColor: '#525ae0',
    },
    warning: {
        buttonBgColor: '#f59f03',
        buttonBgColorHover: '#d97706',
        buttonFgColor: '#fff',
        buttonBorderColor: '#f59f03',
        alertIconBgColor: '#FFFF8F',
        alertIconFgColor: '#8B8000',
    },
    danger: {
        buttonBgColor: '#dd2121',
        buttonBgColorHover: '#b91c1c',
        buttonFgColor: '#fff',
        buttonBorderColor: '#dd2121',
        alertIconBgColor: '#FEE2E2',
        alertIconFgColor: '#DC2626',
    },
    cancel: {
        buttonBgColor: '#fff',
        buttonBgColorHover: '#e2e8f0',
        buttonFgColor: '#000',
        buttonBorderColor: '#95a4b9',
    },
    info: {
        alertIconBgColor: '#DDDEF9',
        alertIconFgColor: '#4248B2',
        buttonBgColor: '#525ae0',
        buttonBgColorHover: '#4248b2',
        buttonFgColor: '#fff',
        buttonBorderColor: '#525ae0',
    },
    success: {
        alertIconBgColor: '#AFE1AF',
        alertIconFgColor: '#097969',
        buttonBgColor: '#AFE1AF',
        buttonBgColorHover: '#097969',
        buttonFgColor: '#000',
        buttonBorderColor: '#AFE1AF',
    }
}

export const sizes: ISize = {
    sm: {
        //width: '84px',
        minWidth: '24px',
        height: '24px',
        fontSize: '12px !important',
        paddingLeft: '12px',
        paddingRight: '12px',
    },
    md: {
        //width: '126px',
        minWidth: '32px',
        height: '32px',
        fontSize: '14px !important',
        paddingLeft: '18px',
        paddingRight: '18px',
    },
    lg: {
        minWidth: '48px',
        height: '48px',
        fontSize: '16px !important',
        paddingLeft: '24px',
        paddingRight: '24px',
    }
}