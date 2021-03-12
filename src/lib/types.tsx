import {
  ToMetaTagsType,
  StructuredTextGraphQlResponse,
  SeoMetaTagType,
  ResponsiveImageType
} from 'react-datocms'

export type Site = {
  favicon: SeoMetaTagType
}

type ImageRecord = {
  id: string
  __typename: string
  image: {
    responsiveImage: ResponsiveImageType
  }
}

export type Single = {
  title: string
  excerpt: string
  slug: string
  seo?: ToMetaTagsType
  content?: StructuredTextGraphQlResponse<ImageRecord>
}
