import * as React from 'react'

import { NotionRenderer } from 'react-notion-x'
import { ExtendedRecordMap } from 'notion-types'
import { useColorMode } from '@chakra-ui/react'

export const NotionPage = ({
  recordMap,
  rootPageId
}: {
  recordMap: ExtendedRecordMap
  rootPageId?: string
}) => {
  if (!recordMap) {
    return null
  }

  const mapPageFn = (pageId) => `blog/${pageId}`
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={colorMode === "dark"}
        rootPageId={rootPageId}
        mapPageUrl={mapPageFn}
      />
    </>
  )
}