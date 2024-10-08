"use client";
import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="font-kotra rounded-full bg-sky-50 py-1 px-2 mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
