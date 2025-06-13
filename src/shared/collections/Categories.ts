import type { CollectionConfig } from 'payload'

import { superAdminOrTenantAdminAccess } from '@/shared/collections/Pages/access/superAdminOrTenantAdmin'
import { slugField } from '@/components/frontend/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
        create: superAdminOrTenantAdminAccess,
        delete: superAdminOrTenantAdminAccess,
        read: () => true,
        update: superAdminOrTenantAdminAccess,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
