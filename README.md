![Elora logo](https://i.imgur.com/6lAn8nu.png)

# Elora - A React component library for Tailwind

Elora is a component library built in TypeScript for React developers who use Tailwind in their projects. I wanted to create something that feels as quick and easy to use as slapping together HTML elements...only with JSX elements. :D

## Demo

<https://brettthurs10.github.io/elora>

## Prequisites

Tailwind will need to be installed for your React project. See instructions here: https://tailwindcss.com/docs/guides/create-react-app

## Installation

Simply run 'npm install elora' to install to your React/Tailwind project.

Note: This library is still in it's infancy. Development works, but when you try to build your React app some stylings will be stripped since I'm using string concatination and PurceCSS doesn't know it should be kept.

Workaround: I've found using these instructions when creating your React app the stylings are kept after you run your build.
https://www.oscarmarion.dev/articles/tailwind-react-cra Essentially these instructions show you how to bypass using CRACO in your config. Expect updates on this topic in the future.

## Components

Current components available are the button component and text field component. More to come soon!

## Sample usage

```tsx
import React from 'react'
import Button from 'elora'

const myButton = () => {
    return (
        <Button
            customColor='green'
            className='border shadow border-green-800'
            buttonStyle='pill'
            onClick={() => alert('Bibbity bobbity boop')}
            name='EloraBtn'
        >
            <p>Click me</p>
        </Button>
    )
}
```

### Button props:

See button props here <https://github.com/BrettThurs10/elora/blob/main/src/Button/index.tsx>

## License

MIT © [BrettThurs10](https://github.com/BrettThurs10)
