import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField } from '../index'

export default {
    title: 'Text Field',
    component: TextField,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof TextField>> = (args) => (
    <TextField {...args} />
)

export const SimpleTextField = Template.bind({})
SimpleTextField.args = {
    label: 'Here is my label',
    inputStyle: 'simple',
    placeholder: 'Type something',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
    label: 'Here is my label',
    inputStyle: 'fullWidth',
    placeholder: 'Type something',
}

export const FullWidthOnFocus = Template.bind({})
FullWidthOnFocus.args = {
    label: 'Here is my label',
    inputStyle: 'fullWidthOnFocus',
    placeholder: 'Type something',
}

export const InputError = Template.bind({})
InputError.args = {
    label: 'Here is my label',
    inputStyle: 'error',
    placeholder: 'Type something',
    alertMsg: 'Something is wrong',
    error: true,
}

export const HandleOnChange = Template.bind({})
HandleOnChange.args = {
    label: "Type in the word 'cat'",
    inputStyle: 'simple',
    placeholder: 'Type something',
    onChange: (e) => {
        if (e.target.value === 'cat') {
            alert('Meow')
            return true
        } else {
            return false
        }
    },
}

export const ValidateOnChange = Template.bind({})
ValidateOnChange.args = {
    label: "Do not type in the word 'dog'",
    inputStyle: 'simple',
    placeholder: 'Type something',
    validateOnChange: true,
    alertMsg: 'I said not to type in the word dog',
    onChange: (e) => {
        if (e.target.value.toLowerCase() === 'dog') {
            console.log('Woof woof')
            return true
        } else {
            return false
        }
    },
}
