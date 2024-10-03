"use client";

import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200">
        <div className="space-y-2 pb-4 pt-6 md:space-y-5">
          <h1 className="text-3xl font-sequel font-extrabold leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-leading space-x-2 pt-8">
            {/* <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight"></h3> */}
            <div className="font-locus" style={{ fontSize: "1rem"}}>
               
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8  xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
