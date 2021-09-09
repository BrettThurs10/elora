import { textFieldStyles } from './textFieldStyles'
import { determineTextFieldStyle, determineInputClass } from './textFieldLogic'

describe('Test determineInputClass logic', () => {
    it('returns simple style if no arguments are passed to the method', () => {
        const baseInputStyle = textFieldStyles.baseInput
        const simpleStyle = textFieldStyles.simple
        const expected = simpleStyle + ' ' + baseInputStyle
        expect(determineInputClass()).toBe(expected)
    })
    it('returns simple style if unknown arguments are passed to the method', () => {
        const baseInputStyle = textFieldStyles.baseInput
        const simpleStyle = textFieldStyles.simple
        const expected = simpleStyle + ' ' + baseInputStyle
        expect(determineInputClass(23)).toBe(expected)
        expect(determineInputClass('woof')).toBe(expected)
    })
    it('returns the simple style if simple argument is passed to the method', () => {
        const baseInputStyle = textFieldStyles.baseInput
        const simpleStyle = textFieldStyles.simple
        const expected = simpleStyle + ' ' + baseInputStyle
        expect(determineInputClass('simple')).toBe(expected)
    })
    it('returns the icon style if simple argument is passed to the method', () => {
        const baseInputStyle = textFieldStyles.baseInput
        const iconStyle = textFieldStyles.icon
        const expected = iconStyle + ' ' + baseInputStyle
        expect(determineInputClass('icon')).toBe(expected)
    })
    it('returns the full width style if fullWidth argument is passed to the method', () => {
        const baseInputStyle =
            textFieldStyles.simple + ' ' + textFieldStyles.baseInput
        const fullWidthStyle = textFieldStyles.fullWidth
        const expected = baseInputStyle + ' ' + fullWidthStyle
        expect(determineInputClass('fullWidth')).toBe(expected)
    })
    it('returns the full width on focus style if fullWidthOnFocus argument is passed to the method', () => {
        const baseInputStyle =
            textFieldStyles.simple + ' ' + textFieldStyles.baseInput
        const fullWidthOnFocusStyle = textFieldStyles.fullWidthOnFocus
        const expected = baseInputStyle + ' ' + fullWidthOnFocusStyle
        expect(determineInputClass('fullWidthOnFocus')).toBe(expected)
    })
})

describe('Test determineTextFieldStyle logic', () => {
    it('returns simple style if no arguments are passed to the method', () => {
        const expected = textFieldStyles.simple
        expect(determineTextFieldStyle()).toBe(expected)
    })
    it('returns simple style if unknown arguments are passed to the method', () => {
        const expected = textFieldStyles.simple
        expect(determineTextFieldStyle(23)).toBe(expected)
        expect(determineTextFieldStyle('woof')).toBe(expected)
    })
    it('returns simple style if simple argument is to the method', () => {
        const expected = textFieldStyles.simple
        expect(determineTextFieldStyle('simple')).toBe(expected)
    })
    it('returns icon style if icon argument is passed to the method', () => {
        const expected = textFieldStyles.icon
        expect(determineTextFieldStyle('icon')).toBe(expected)
    })
    it('returns error style if error argument is passed to the method', () => {
        const expected = textFieldStyles.inputError
        const hasError = true
        expect(determineTextFieldStyle('simple', hasError)).toBe(expected)
    })
})
