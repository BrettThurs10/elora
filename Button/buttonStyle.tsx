const buttonStyles = {
  simple: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    let theTextColor = textColor ? textColor : "white";
    return `bg-${primaryColor}-500 hover:bg-${primaryColor}-700 text-${theTextColor} font-bold py-2 px-4 rounded`;
  },
  pill: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    let theTextColor = textColor ? textColor : "white";
    return `bg-${primaryColor}-500 hover:bg-${primaryColor}-700 text-${theTextColor} font-bold py-2 px-4 rounded-full`;
  },
  outline: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    let theTextColor = textColor ? textColor : "white";
    return `bg-transparent hover:bg-${primaryColor}-500 text-${primaryColor}-700 font-semibold hover:text-${theTextColor} py-2 px-4 border border-${primaryColor}-500 hover:border-transparent rounded`;
  },
  bordered: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    let theTextColor = textColor ? textColor : "white";
    return `bg-${primaryColor}-500 hover:bg-${primaryColor}-700 text-${theTextColor} font-bold py-2 px-4 border border-${primaryColor}-700 rounded`;
  },
  disabled: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    let theTextColor = textColor ? textColor : "white";
    return `bg-${primaryColor}-500 text-${theTextColor} font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed`;
  },
  threeD: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    let theTextColor = textColor ? textColor : "white";
    return `bg-${primaryColor}-500 hover:bg-${primaryColor}-400 text-${theTextColor} font-bold py-2 px-4 border-b-4 border-${primaryColor}-700 hover:border-${primaryColor}-500 rounded`;
  },
  elevated: (
    customColor?: string,
    customSecondaryColor?: string,
    textColor?: string
  ) => {
    let primaryColor = customColor ? customColor : "white";
    let secondaryColor = customSecondaryColor ? customSecondaryColor : "gray";
    let theTextColor = textColor ? textColor : "gray";
    return `bg-${primaryColor} hover:bg-${secondaryColor}-100 text-${theTextColor}-800 font-semibold py-2 px-4 border border-${secondaryColor}-400 rounded shadow`;
  },
  icon: (customColor?: string, textColor?: string) => {
    let primaryColor = customColor ? customColor : "gray";
    let theTextColor = textColor ? textColor : "white";
    return `bg-${primaryColor}-300 hover:bg-${primaryColor}-400 text-${theTextColor}-800 font-bold py-2 px-4 rounded inline-flex items-center`;
  },
  actualIcon: (customColor?: string) => {
    let primaryColor = customColor ? customColor : "blue";
    return `h-4 w-4 mr-2 text-${primaryColor}-00`;
  },
  anotherButton: "bg-yellow-500 text-black rounded px-2 py",
};

export default buttonStyles;
