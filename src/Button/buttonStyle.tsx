const buttonStyles = {
  simple: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = `bg-${customColor}-500`
    const hoverColor = `hover:bg-${customColor}-700`
    const theTextColor = `text-${textColor}`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 rounded`
  },
  pill: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = `bg-${customColor}-500`
    const hoverColor = `hover:bg-${customColor}-700`
    const theTextColor = `text-${textColor}`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 rounded-full`
  },
  outline: (customColor: string = 'blue', textColor: string = 'white') => {
    const hoverColor = `hover:bg-${customColor}-700`
    const theTextColor = `text-${textColor}`
    const hoverTextColor = `hover:${theTextColor}`
    const borderColor = `border-${customColor}-500`
    return `bg-transparent ${hoverColor} ${theTextColor} font-semibold ${hoverTextColor} py-2 px-4 border ${borderColor} hover:border-transparent rounded`
  },
  bordered: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = `bg-${customColor}-500`
    const hoverColor = `hover:bg-${customColor}-700`
    const theTextColor = `text-${textColor}`
    const borderColor = `border-${customColor}-500`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 border ${borderColor} rounded`
  },
  disabled: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = `bg-${customColor}-500`
    const theTextColor = `text-${textColor}`
    return `${bgColor} ${theTextColor} font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`
  },
  threeD: (customColor: string = 'blue', textColor: string = 'white') => {
    const bgColor = `bg-${customColor}-500`
    const hoverColor = `hover:bg-${customColor}-400`
    const theTextColor = `text-${textColor}`
    const borderColor = `border-${customColor}-700`
    const hoverBorderColor = `hover:border-${customColor}-500`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 border-b-4 ${borderColor} ${hoverBorderColor} rounded`
  },
  elevated: (
    customColor: string = 'white',
    customSecondaryColor: string = 'gray',
    textColor: string = 'gray'
  ) => {
    const bgColor = `bg-${customColor}-500`
    const hoverColor = `hover:bg-${customSecondaryColor}-100`
    const theTextColor = `text-${textColor}-800`
    const borderColor = `border-${customSecondaryColor}-400`
    return `${bgColor} ${hoverColor} ${theTextColor} font-semibold py-2 px-4 border ${borderColor} rounded shadow`
  },
  icon: (customColor: string = 'gray', textColor: string = 'white') => {
    const bgColor = `bg-${customColor}-300`
    const hoverColor = `hover:bg-${customColor}-400`
    const theTextColor = `text-${textColor}-800`
    return `${bgColor} ${hoverColor} ${theTextColor} font-bold py-2 px-4 rounded inline-flex items-center`
  },
  actualIcon: (customColor: string = 'blue') => {
    let iconColor = `text-${customColor}-600`
    return `h-4 w-4 mr-2 ${iconColor}`
  },
  anotherButton: 'bg-yellow-500 text-black rounded px-2 py'
}

export default buttonStyles
