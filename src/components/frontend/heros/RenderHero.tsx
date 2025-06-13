import React from 'react'

import type { Page } from '@/config/payload-types'

import { HighImpactHero } from '@/components/frontend/heros/HighImpact'
import { LowImpactHero } from '@/components/frontend/heros/LowImpact'
import { MediumImpactHero } from '@/components/frontend/heros/MediumImpact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
