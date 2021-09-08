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
