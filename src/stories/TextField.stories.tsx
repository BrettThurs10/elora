import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { TextField } from '../index'

export default {
    title: 'TextField',
    component: TextField,
    args: {
        placeholder: 'Type something...',
    },
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof TextField>> = (args) => (
    <TextField {...args} />
)

export const DefaultTextField = Template.bind({})
DefaultTextField.args = {}

export const RoundedTextField = Template.bind({})
RoundedTextField.args = {
    inputType: 'rounded',
}

export const PillTextField = Template.bind({})
PillTextField.args = {
    inputType: 'pill',
}

export const FullWidthTextField = Template.bind({})
FullWidthTextField.args = {
    inputType: 'fullWidth',
}

export const IconTextField = Template.bind({})
IconTextField.args = {
    heroIconsName: 'UserIcon',
    placeholder: 'Username',
    inputType: 'icon',
}

export const CustomStyleTextField = Template.bind({})
CustomStyleTextField.args = {
    style: {
        backgroundColor: 'transparent',
        border: '0 solid black',
        borderBottom: '5px solid purple',
    },
}
