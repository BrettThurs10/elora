import { buttonStyles } from '..'
import { determineButtonStyle, handleClassName } from './buttonLogic'

describe('Test determineButtonStyle logic', () => {
  it('passes a default simple buttonStyle if no argument is provided', () => {
    const expected = buttonStyles.simple()
    expect(determineButtonStyle()).toBe(expected)
  })
  it('set the pill buttonStyle', () => {
    const expected = buttonStyles.pill()
    expect(determineButtonStyle('blue', 'pill')).toBe(expected)
  })
  it('sets the outline buttonStyle', () => {
    const expected = buttonStyles.outline()
    expect(determineButtonStyle('blue', 'outline')).toBe(expected)
  })
  it('sets the 3d buttonStyle', () => {
    const expected = buttonStyles.threeD()
    expect(determineButtonStyle('blue', '3d')).toBe(expected)
  })
  it('sets the disabled buttonStyle', () => {
    const expected = buttonStyles.disabled()
    expect(determineButtonStyle('blue', 'disabled')).toBe(expected)
  })
  it('sets the icon buttonStyle ', () => {
    const expected = buttonStyles.icon()
    expect(determineButtonStyle('gray', 'icon')).toBe(expected)
  })
  it('sets the elevated buttonStyle', () => {
    const expected = buttonStyles.elevated()
    expect(determineButtonStyle('white', 'elevated')).toBe(expected)
  })
  it('sets default simple if unknown argument is passed', () => {
    const expected = buttonStyles.simple()
    const mockFun = jest.fn()
    expect(determineButtonStyle('blue', 'woof')).toBe(expected)
    expect(determineButtonStyle('blue', 32)).toBe(expected)
    expect(determineButtonStyle('blue', mockFun())).toBe(expected)
  })
})

describe('test handleClassName logic', () => {
  describe('passes arguments and sets accordingly', () => {
    it('passes a {color} simple set', () => {
      const simple = buttonStyles.simple('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'simple', undefined)).toBe(
        simple
      )
    })
    it('passes a {color} outline set', () => {
      const outline = buttonStyles.outline('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'outline', undefined)).toBe(
        outline
      )
    })
    it('passes a {color} icon set', () => {
      const icon = buttonStyles.icon('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'icon', undefined)).toBe(icon)
    })
    it('passes a {color} bordered set', () => {
      const bordered = buttonStyles.bordered('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'bordered', undefined)).toBe(
        bordered
      )
    })
    it('passes a {color} 3d set', () => {
      const bordered = buttonStyles.threeD('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', '3d', undefined)).toBe(
        bordered
      )
    })
    it('passes a {color} elevated set', () => {
      const bordered = buttonStyles.elevated('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'elevated', undefined)).toBe(
        bordered
      )
    })
    it('passes a {color} disabled set', () => {
      const bordered = buttonStyles.disabled('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'disabled', undefined)).toBe(
        bordered
      )
    })
    it('passes a {color} pill set', () => {
      const bordered = buttonStyles.pill('green') + ' flex items-center'
      expect(handleClassName(undefined, 'green', 'pill', undefined)).toBe(
        bordered
      )
    })
  })
})
