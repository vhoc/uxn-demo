export type TVariant = {
    buttonBgColor: string
    buttonBgColorHover?: string
    buttonFgColor: string
    buttonBorderColor: string
}

export type TSize = {
    minWidth: string,
    height: string,
    fontSize: string,
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
    },
    danger: {
        buttonBgColor: '#dd2121',
        buttonBgColorHover: '#b91c1c',
        buttonFgColor: '#fff',
        buttonBorderColor: '#dd2121',
    },
    cancel: {
        buttonBgColor: '#fff',
        buttonBgColorHover: '#e2e8f0',
        buttonFgColor: '#000',
        buttonBorderColor: '#95a4b9',
    }
}

export const sizes: ISize = {
    sm: {
        //width: '84px',
        minWidth: '84px',
        height: '24px',
        fontSize: '0.8rem',
    },
    md: {
        //width: '126px',
        minWidth: '126px',
        height: '32px',
        fontSize: '1rem',
    },
    lg: {
        minWidth: '168px',
        height: '48px',
        fontSize: '1.3rem',
    }
}