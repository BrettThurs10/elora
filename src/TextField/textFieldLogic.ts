import { textFieldStyles } from './textFieldStyles'
export const handleClick = () => {
    console.log('clicked')
}

export const determineTextFieldStyle = (style?: string, error?: boolean) => {
    if (error) {
        return textFieldStyles.inputError
    }
    switch (style) {
        case 'simple':
            return textFieldStyles.simple
        default:
            return 'simple'
    }
}

export const determineInputClass = (styleInput?: string, error?: boolean) => {
    let baseClass =
        'focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md p-2 transition duration-500 ease-in-out'
    if (styleInput == 'fullWidth') {
        baseClass += ' w-full '
    }
    if (styleInput == 'fullWidthOnFocus') {
        baseClass += ' hover:w-64 '
    }
    if (styleInput) {
        return `${determineTextFieldStyle(styleInput, error)} ${baseClass}`
    } else {
        return `${textFieldStyles.simple} ${baseClass}`
    }
}
