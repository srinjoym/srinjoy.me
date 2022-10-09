import * as React from 'react'

import { ExtendedRecordMap } from 'notion-types'
import { NotionPage } from '../../components/NotionPage'
import { rootNotionPageId } from '../../lib/config'
import notion from '../../lib/notion'
import Layout from '../../components/Layout'
import { getPageTitle } from 'notion-utils'
import { PageMap } from '../../data/blog'

export const getStaticProps = async (context) => {
  // Find raw page id from page map
  let rawPageId = ""
  if (PageMap[context.params.id] !== undefined) {
    rawPageId = PageMap[context.params.id]
  } else {
    rawPageId = (context.params.id as string) || rootNotionPageId
  }

  const recordMap = await notion.getPage(rawPageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  let title = ""
  if (recordMap) {
    title = getPageTitle(recordMap)
  }

  return <Layout title={title}>
    <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
  </Layout>
}