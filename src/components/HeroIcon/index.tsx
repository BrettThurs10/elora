import React from 'react'
import IHeroIcon from './IHeroIcon'

/**
 * @component for rendering Hero Icons.
 */

export const HeroIcon = ({
    iconType = 'outline',
    name,
    width = '20px',
}: IHeroIcon) => {
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
    return (
        <div style={{ width: width }}>
            <Icon />
        </div>
    )
}
