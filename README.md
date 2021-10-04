![Elora logo](https://i.imgur.com/6nsO0WG.png)

# Elora - A React component library

Elora is an enchanting component library built in TypeScript for React projects. It's purpose is to be a no fuss library to help you concoct whatever magical stuff you dream up. :D

## Demo

<https://brettthurs10.github.io/elora>

## Installation

Simply run 'npm install elora' to install to your React project.

Note: This library is still in it's infancy. The button element is available for now. More to come soon!

## Components

Current components available are the button component and text field component. More to come soon!

## Sample usage

```tsx
import React from 'react'
import Button from 'elora'

const MyButton = () => {
    return (
        <Button btnType='pill' onClick={() => alert('Bibbity bobbity boop')}>
            <p>Click me</p>
        </Button>
    )
}

const DownloadButton = () => {
    return (
        <Button heroIconsName='Download' onClick={() => downloadFunction()}>
            <p>Download</p>
        </Button>
    )
}
```

### Button props:

See button props here <https://github.com/BrettThurs10/elora/blob/main/src/Button/index.tsx>

## License

MIT © [BrettThurs10](https://github.com/BrettThurs10)
