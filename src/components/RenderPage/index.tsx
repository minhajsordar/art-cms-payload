import type { Page } from '@/config/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/components/frontend/heros/RenderHero'

import React from 'react'

export const RenderPage = ({ data }: { data: Page }) => {
  return (
    <React.Fragment>
      <div className='container mx-auto'>
      <form action="/api/users/logout" method="post">
        <button className='text-blue-600 underline' type="submit">Logout</button>
      </form>
      <h2>Here you can decide how you would like to render the page data!</h2>

      </div>
      {/* <code>{JSON.stringify(data, null, 4)}</code> */}
      {/* <div>
        <div>{typeof data?.tenant === 'object' ? data?.tenant?.domain: ""}</div>
      </div> */}

      <RenderHero {...data.hero} />
      <RenderBlocks blocks={data.layout} />
    </React.Fragment>
  )
}
