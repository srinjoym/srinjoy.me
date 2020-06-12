import { DefaultSeo } from 'next-seo'

const SeoConfig = {
  titleTemplate: "%s | Srinjoy Majumdar",
  description: 'Software Engineer at Microsoft building HoloLens',
  noIndex: false,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://srinjoy.me',
    site_name: 'Srinjoy Majumdar',
  },
  twitter: {
    handle: '@SrinjoyMajumdar',
    site: '@SrinjoyMajumdar',
    cardType: 'summary_large_image',
  },
}

export const RootSeo = () => <DefaultSeo {...SeoConfig} />