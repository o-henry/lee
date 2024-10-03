'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
// import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  // const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}