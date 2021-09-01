![Elora logo](https://i.imgur.com/6lAn8nu.png)

# Elora - A React component library for Tailwind

Elora is a component library built in TypeScript for React developers who use Tailwind in their projects. I wanted to create something that feels as quick and easy to use as slapping together HTML elements...only with JSX elements. :D

## Prequisites

Tailwind will need to be installed for your React project. See instructions here: https://tailwindcss.com/docs/guides/create-react-app

## Installation

Simply run 'npm install elora' to install to your React/Tailwind project.

## Components

The button component is available now. More to come!

## Usage

```tsx
import React from 'react'
import Button from 'elora'

const myButton = () => {
  return (
    <Button
      buttonText='My magic button'
      buttonStyle='pill'
      onClick={() => alert('Bibbity bobbity boop')}
      name='EloraBtn'
    />
  )
}
```

### Button props:

**@component for the all mighty button.**

**@param {string} buttonStyle** - Optional: Choose a button style from "simple", "pill", "3d", "elevated", "disabled", or "icon". Default is set to "simple" within the component if not specified

**@param {string} buttonText** - Optional: Set what you want the button text to be.

**@param {JsxElement} children** - Optional: Put any React components you want inside your Button tag.

@example
`<Button className="styles.coolButton"> <ReallyNiceSVGIcon /> </Button>`

**@param {string} className** - Optional: Add a class onto your buttonStyle prop as you see fit. For instance the "pill" buttonStyle has a default background of blue, but you could set this to "bg-pink-600" and it would add to the class attribute, thereby replacing the blue background set with "pill". Likewise, you could simply use the customColor prop in this scenario and set it to just "pink". See customColor for more info.

@example
`<Button buttonStyle="pill" className="bg-pink-600" />`

**@param {string} classNameOverride** - Optional: Replace the default className prop with someething entirely your own either with a CSS class or a Tailwind string you've cooked up.

@example
`<Button type="bordered" classNameOverride={styles.wayBetterBorderedBtn} />`

**@param {string} customColor** - Optional: Set the primary color you want the button to have.

@example
`<Button buttonText="I prefer green" customColor="green" />`

**@param {string} form** - Optional: Set the form id string that this button should belong to. Note: this only works if type is set to "submit".

@example
`<Button form="form_345" buttonText="Submit" onClick={handleSubmit()} />`

**@param {string} formEncType** - Optional: Set how the form-data should be encrypted. "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain". Note: this only works if type is set to "submit".

**@param {string} formMethod** - Optional: Set how the form will behave on execution: "get" or "post". Note: this only works if type is set to "submit".

**@param {boolean} formNoValidate** - Optional: Set if you want to validate your form on submission or not. Note: this only works if type is set to "submit".

**@param {string} formTarget** - Optional: Specify where to display the response after submitting the form. "\_blank" | "\_self" | "\_parent" | "\_top" | string. Note: this only works if type is set to "submit".

**@param {JSXElement} icon** - Optional: Pass in the JSX element you want to act as your icon for buttonStyle props set to "icon".

@example
`<Button buttonText="Download" buttonStyle="icon" icon={DownloadButtonIcon} />`

**@param {string} name** - Optional: Set the name attribute of the button.

**@param {function} onClick** - Optional: Set the function that should run when the user clicks the button.

**@param {string} type** - Optional: Set the button type: "button" | "submit" | "reset". Defaults to "button" if undefined.

**@param {string} value** - Optional: Set the initial value of the button.

## License

MIT © [BrettThurs10](https://github.com/BrettThurs10)
