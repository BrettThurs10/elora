import React, { ComponentProps } from 'react'
import { DownloadIcon } from '@heroicons/react/outline'
import { Story, Meta } from '@storybook/react'
import { Button } from '../index'

export default {
    title: 'Button',
    component: Button,
    args: {
        children: <p>Click me</p>,
    },
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
    <Button {...args} onClick={() => alert('boop')} />
)

export const DefaultButton = Template.bind({})
DefaultButton.args = {}

export const RoundedButton = Template.bind({})
RoundedButton.args = {
    btnType: 'rounded',
}

export const PillButton = Template.bind({})
PillButton.args = {
    btnType: 'pill',
}

export const IconButton = Template.bind({})
IconButton.args = {
    heroIconName: 'DownloadIcon',
    children: <p>Download</p>,
}

export const CustomStyleButton = Template.bind({})
CustomStyleButton.args = {
    style: {
        backgroundColor: 'transparent',
        border: '0 solid black',
        borderBottom: '5px solid purple',
    },
}
