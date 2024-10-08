
import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title, tags } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-3 text-center">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="!font-black text-base text-left uppercase font-bantayog font-medium leading-6 text-gray-500">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-gray-200 pb-8  xl:divide-y-0">
            <div className="divide-y divide-gray-200  xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 ">{children}</div>
              {/* <div className="prose mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0 pb-8 pt-10 dark:prose-invert">{children}</div> */}
            </div>
            {siteMetadata.comments && (
              <div className="pb-6 pt-6 text-center text-gray-700" id="comment">
                <Comments slug={slug} />
              </div>
            )}
            <footer>
                <div className="divide-gray-200 text-sm font-medium leading-5  xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="font-sequel text-xs uppercase tracking-wide text-gray-500">
                      Tags
                    </h2>
                    <div className="flex flex-wrap mt-3">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                </div>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && prev.path && (
                  <div className="grow pt-4 xl:pt-8 text-start">
                    <Link
                      href={`/${prev.path}`}
                      className="font-kotra text-stone-500 hover:text-blue-600 "
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      {'<'} {prev.title}
                    </Link>
                  </div>
                )}
                
                <div className="grow-0" />

                {next && next.path && (
                  <div className="grow pt-4 xl:pt-8 text-end">
                    <Link
                      href={`/${next.path}`}
                      className="font-kotra text-stone-500 hover:text-blue-600"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} {'>'}
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
