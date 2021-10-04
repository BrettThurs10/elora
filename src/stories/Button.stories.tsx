import React, { ComponentProps } from 'react'
import { DownloadIcon } from '@heroicons/react/outline'
import { Story, Meta } from '@storybook/react'
import { Button } from '../index'

export default {
    title: 'Button',
    component: Button,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
    <Button {...args} onClick={() => alert('boop')}>
        <p>Click me</p>
    </Button>
)

const IconTemplate: Story<ComponentProps<typeof Button>> = (args) => (
    <Button {...args} onClick={() => alert('boop')}>
        <DownloadIcon /> <p>Download</p>
    </Button>
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
