import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage, GetStaticProps } from 'next'
import { renderMetaTags, ToMetaTagsType } from 'react-datocms'

import { request } from '@/lib/cms'
import { metaTagsFragment } from '@/lib/fragments'
import { Site, Single } from '@/lib/types'

export const getStaticProps: GetStaticProps = async() => {
  const SITE_QUERY = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        home {
          title
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
        }
        pages: allSingles(first: 20) {
          title
          slug
          excerpt
        }
      }

      ${metaTagsFragment}
    `
  }

  const data = await request(SITE_QUERY)

  return {
    props: {
      data
    }
  }
}

export type Home = {
  title: string
  seo: ToMetaTagsType
}

type Page = {
  data: {
    site: Site
    home: Home
    pages: Single[]
  }
}

const Homepage: NextPage<Page> = ({
  data: {
    pages,
    site,
    home
  }
}) => {
  const metaTags = home.seo.concat(site.favicon)

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main className="home">
        <div className="grid">
          <div className="container-sm">
            <h1>{home.title}</h1>
            <h2>h2: The face of the moon was in shadow.</h2>
            <h3>h3: The face of the moon was in shadow.</h3>
            <h4>h4: The face of the moon was in shadow.</h4>
            <h5>h5: The face of the moon was in shadow.</h5>
            <h6>h6: The face of the moon was in shadow.</h6>
            <p className="streamer">Streamer: The face of the moon was in shadow.</p>
            <p className="quote-lg">Quote LG: The face of the moon was in shadow.</p>
            <p className="quote-md">Quote MD: The face of the moon was in shadow.</p>
            <p className="body-lg">Body LG: The face of the moon was in shadow.</p>
            <p className="body-md">Body MD: The face of the moon was in shadow.</p>
            <p className="body-sm">Body SM: The face of the moon was in shadow.</p>
            <a className="textlink-lg" href="/" >Textlink LG: The face of the moon was in shadow.</a><br/>
            <a className="textlink-md" href="/" >Textlink MD: The face of the moon was in shadow.</a><br/>
            <a className="textlink-sm" href="/" >Textlink SM: The face of the moon was in shadow.</a><br/>
            <p className="caption">Caption: The face of the moon was in shadow.</p>
            <p className="eyebrow">Eyebrow: The face of the moon was in shadow.</p>
            <a className="footerlink-md" href="/" >Footerlink MD: The face of the moon was in shadow.</a><br/>
            <a className="footerlink-sm" href="/" >Footerlink SM: The face of the moon was in shadow.</a><br/>
            <div className="pages">
              {
                pages.map((page, idx) => (
                  <div key={idx}>
                    <h4>
                      <Link as={`/single/${page.slug}`} href="/single/[slug]">
                        <a className="hover:underline">{page.title}</a>
                      </Link>
                    </h4>
                    <p>{page.excerpt}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage
