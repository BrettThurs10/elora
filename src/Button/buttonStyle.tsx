const determineColorSet = (
  type: string,
  color: string,
  opacity: string = '500'
) => {
  if (color === 'white') {
    return `${type}-${color}`
  } else if (color.toLowerCase() === 'black') {
    return `${type}-${color}`
  } else {
    return `${type}-${color}-${opacity}`
  }
}

const buttonStyles = {
  simple: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = determineColorSet('bg', customColor)
    const hoverColor = determineColorSet('hover:bg', customColor, '700')
    const theTextColor = determineColorSet('text', textColor)
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 rounded`
  },
  pill: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = determineColorSet('bg', customColor)
    const hoverColor = determineColorSet('hover:bg', customColor, '700')
    const theTextColor = determineColorSet('text', textColor)
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 rounded-full`
  },
  outline: (customColor: string = 'blue', textColor: string = 'blue') => {
    const hoverColor = determineColorSet('hover:bg', customColor, '700')
    const theTextColor = determineColorSet('text', textColor)
    const hoverTextColor = `hover:text-white`
    const borderColor = `border-${customColor}-500`
    return `bg-transparent ${hoverColor} ${theTextColor} font-semibold ${hoverTextColor} py-2 px-4 border ${borderColor} hover:border-transparent rounded`
  },
  bordered: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = determineColorSet('bg', customColor)
    const hoverColor = determineColorSet('hover:bg', customColor, '700')
    const theTextColor = determineColorSet('text', textColor)
    const borderColor = `border-${customColor}-900`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 border ${borderColor} rounded`
  },
  disabled: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = determineColorSet('bg', customColor)
    const theTextColor = determineColorSet('text', textColor)
    return `${bgColor} ${theTextColor} font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
  },
  threeD: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = determineColorSet('bg', customColor)
    const hoverColor = determineColorSet('hover:bg', customColor, '400')
    const theTextColor = determineColorSet('text', textColor)
    const borderColor = `border-${customColor}-700`
    const hoverBorderColor = `hover:border-${customColor}-500`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 border-b-4 ${borderColor} ${hoverBorderColor} rounded`
  },
  elevated: (
    customColor: string = 'white',
    customSecondaryColor: string = 'gray',
    textColor: string = 'gray'
  ) => {
    const bgColor = `bg-${customColor}`
    const hoverColor = determineColorSet(
      'hover:bg',
      customSecondaryColor,
      '100'
    )
    const theTextColor = determineColorSet('text', textColor)
    const borderColor = `border-${customSecondaryColor}-200`
    return `${bgColor} ${hoverColor} ${theTextColor} font-semibold py-2 px-4 border ${borderColor} rounded shadow`
  },
  icon: (customColor: string = 'gray', textColor: string = 'white') => {
    const bgColor = determineColorSet('bg', customColor, '500')
    const hoverColor = determineColorSet('hover:bg', customColor, '400')
    const theTextColor = determineColorSet('text', textColor, '800')
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 rounded inline-flex items-center`
  },
  actualIcon: (customColor: string = 'white') => {
    const iconColor = determineColorSet('text', customColor, '600')
    return `h-4 w-4 mr-2 ${iconColor}`
  },
  anotherButton: 'bg-yellow-500 text-black rounded px-2 py'
}

export default buttonStyles
