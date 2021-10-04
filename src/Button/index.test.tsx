import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './index'

describe('<Button/>', () => {
    it('renders children', async () => {
        render(
            <Button>
                <p>Click me</p>
            </Button>
        )
        expect(screen.getByText('Click me'))
    })
    it('onClick executes', async () => {
        const mockFn = jest.fn()
        render(
            <Button data-testid='btn-click' onClick={mockFn}>
                <p>Click me</p>
            </Button>
        )
        const btnClick = screen.getByTestId('btn-click')
        fireEvent.click(btnClick)
        expect(mockFn).toHaveBeenCalled()
    })
})
