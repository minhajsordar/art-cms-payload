import type { Media } from '@/config/payload-types'

export const imageHero1: Omit<Media, 'createdAt' | 'id' | 'updatedAt'> = {
  alt: 'Straight metallic shapes with a blue gradient',
}
