import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section className="mx-auto max-w-xl px-4 sm:px-6 xl:max-w-xl xl:px-0">{children}</section>
  )
}
