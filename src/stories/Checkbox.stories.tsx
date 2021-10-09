import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { Checkbox } from '../index'

export default {
    title: 'Checkbox',
    component: Checkbox,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Checkbox>> = (args) => (
    <Checkbox {...args} />
)

export const DefaultCheckbox = Template.bind({})
DefaultCheckbox.args = {
    name: 'default',
}
