import { textFieldStyles } from './textFieldStyles'

export const determineTextFieldStyle = (style?: string, error?: boolean) => {
    if (error) {
        return textFieldStyles.inputError
    }
    switch (style) {
        case 'simple':
            return textFieldStyles.simple
        case 'icon':
            return textFieldStyles.icon
        default:
            return textFieldStyles.simple
    }
}

export const determineInputClass = (styleInput?: string, error?: boolean) => {
    let baseClass = textFieldStyles.baseInput
    if (styleInput == 'fullWidth') {
        baseClass += ' ' + textFieldStyles.fullWidth
    }
    if (styleInput == 'fullWidthOnFocus') {
        baseClass += ' ' + textFieldStyles.fullWidthOnFocus
    }
    if (styleInput) {
        return `${determineTextFieldStyle(styleInput, error)} ${baseClass}`
    } else {
        return `${textFieldStyles.simple} ${baseClass}`
    }
}
