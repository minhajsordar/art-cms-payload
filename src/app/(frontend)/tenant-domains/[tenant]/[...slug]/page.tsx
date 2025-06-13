import type { Where } from 'payload'

import configPromise from '@/config/payload.config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import React from 'react'

import { RenderPage } from '@/components/RenderPage'

// eslint-disable-next-line no-restricted-exports
export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ slug?: string[]; tenant: string }>
}) {
  const params = await paramsPromise
  let slug = undefined
  if (params?.slug) {
    // remove the domain route param
    slug = params.slug
  }
  const payload = await getPayload({ config: configPromise })
  const slugConstraint: Where = slug
    ? {
        slug: {
          equals: slug.join('/'),
        },
      }
    : {
        or: [
          {
            slug: {
              equals: '',
            },
          },
          {
            slug: {
              equals: 'home',
            },
          },
          {
            slug: {
              exists: false,
            },
          },
        ],
      }
      
  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          'tenant.domain': {
            equals: params.tenant,
          },
        },
        slugConstraint,
      ],
    },
  })

  const pageData = pageQuery.docs?.[0]

  // The page with the provided slug could not be found
  if (!pageData) {
    return notFound()
  }

  // The page was found, render the page with data
  return <RenderPage data={pageData} />
}
