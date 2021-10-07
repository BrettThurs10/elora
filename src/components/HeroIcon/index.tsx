import React from 'react'

/**
 * @component for rendering Hero Icons.
 */

interface Props {
    iconType?: 'outline' | 'solid'
    name: string
}

const Index = ({ iconType = 'outline', name }: Props) => {
    const iconOutline = require('@heroicons/react/outline')
    const iconSolid = require('@heroicons/react/solid')
    let heroIcons = iconOutline
    let Icon = undefined
    if (iconType === 'solid') {
        heroIcons = iconSolid
    }
    if (name) {
        Icon = heroIcons[name]
    }
    return <Icon />
}

export default Index
