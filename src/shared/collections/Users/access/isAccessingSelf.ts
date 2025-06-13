import { User } from '@/config/payload-types'

export const isAccessingSelf = ({ id, user }: { user?: User; id?: string | number }): boolean => {
  return user ? Boolean(user.id === id) : false
}
