import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-left text-2xl font-sequel font-semibold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
      {children} 
    </h1>
  )
}
