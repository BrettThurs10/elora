import React, { ComponentProps } from 'react'
import { DownloadIcon } from '@heroicons/react/outline'
import { Story, Meta } from '@storybook/react'
import { Button, buttonStyles, animatedStyles } from '../index'

export default {
  title: 'Button',
  component: Button
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} onClick={() => alert('boop')}>
    <p>Click me</p>
  </Button>
)

const IconTemplate: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} onClick={() => alert('boop')}>
    <DownloadIcon className={buttonStyles.actualIcon()} /> <p>Download</p>
  </Button>
)

export const SimpleButton = Template.bind({})
SimpleButton.args = {
  buttonStyle: 'simple'
}

export const PillButton = Template.bind({})
PillButton.args = {
  buttonStyle: 'pill'
}

export const OutlineButton = Template.bind({})
OutlineButton.args = {
  buttonStyle: 'outline'
}

export const BorderedButton = Template.bind({})
BorderedButton.args = {
  buttonStyle: 'bordered'
}

export const ElevatedButton = Template.bind({})
ElevatedButton.args = {
  buttonStyle: 'elevated'
}

export const ThreeDButton = Template.bind({})
ThreeDButton.args = {
  buttonStyle: '3d'
}

export const DisabledButton = Template.bind({})
DisabledButton.args = {
  buttonStyle: 'disabled'
}

export const IconButton = IconTemplate.bind({})
IconButton.args = {
  buttonStyle: 'icon'
}

export const ColorOverride = Template.bind({})
ColorOverride.args = {
  buttonStyle: 'simple',
  customColor: 'green'
  onClick: ()=>alert('testing')
}

export const ClassNameColorOverride = Template.bind({})
ClassNameColorOverride.args = {
  buttonStyle: 'simple',
  customColor: 'pink',
  classNameOverride: buttonStyles.anotherButton
}

export const ZoomOnHover = Template.bind({})
ZoomOnHover.args = {
  buttonStyle: 'simple',
  className: animatedStyles.zoomOnHover
}
