import React from 'react'

import { Button } from 'elora'
import 'elora/dist/index.css'

const App = () => {
  return (
    <div id='App'>
      <Button
        name='Elora button'
        customColor='green'
        onClick={() => alert('boop')}
        buttonText='hey there'
      />
    </div>
  )
}

export default App
