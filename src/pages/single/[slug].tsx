import * as React from 'react'
import Head from 'next/head'
import { NextPage, GetStaticProps } from 'next'
import {
  renderMetaTags,
  StructuredText,
  Image,
} from 'react-datocms'

// Components
import Grid, { Col, GridSize } from '@/components/meta/Grid'

// Lib
import { request } from '@/lib/cms'
import { metaTagsFragment, responsiveImageFragment } from '@/lib/fragments'
import { Site, Single } from '@/lib/types'

export async function getStaticPaths() {
  const data = await request({ query: '{ allSingles { slug } }' })

  return {
    paths: data.allSingles.map((single: Single) => `/single/${single.slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const SITE_QUERY = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        single(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
        }
      }

      ${responsiveImageFragment}
      ${metaTagsFragment}
    `,
    variables: {
      slug: params.slug,
    }
  }

  const data = await request(SITE_QUERY)

  return {
    props: {
      data
    }
  }
}

type Page = {
  data: {
    site: Site
    single: Single
  }
}

const SinglePage: NextPage<Page> = ({
  data: {
    site,
    single
  }
}) => {
  const metaTags = single.seo.concat(site.favicon)
  const content = single.content

  return (
    <>
      <Head>{renderMetaTags(metaTags)}</Head>
      <main className="single">
        <Grid cols={12} size={GridSize.Small}>
          <Col span={12}>
            <h1>{single.title}</h1>
            <StructuredText
              data={content}
              renderBlock={({ record }) => {
                if (record.__typename === 'ImageBlockRecord') {
                  return <Image data={record.image.responsiveImage} />
                }

                return (
                  <>
                    <p>Can not render this block.</p>
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </>
                )
              }}
            />
          </Col>
        </Grid>
      </main>
    </>
  )
}

export default SinglePage
