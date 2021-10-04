import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index'

test('Button renders children', async () => {
    render(
        <Button>
            <p>Click me</p>
        </Button>
    )
    expect(screen.getByText('Click me'))
})
