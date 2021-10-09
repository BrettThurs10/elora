import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import HeroIcon from '../components/HeroIcon'

export default {
    title: 'Hero Icon',
    component: HeroIcon,
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof HeroIcon>> = (args) => (
    <HeroIcon {...args} />
)

export const SolidIcon = Template.bind({})
SolidIcon.args = {
    iconType: 'solid',
    name: 'DownloadIcon',
}

export const OutlineIcon = Template.bind({})
OutlineIcon.args = {
    name: 'DownloadIcon',
}
