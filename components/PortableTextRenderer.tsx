import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

const components = {
  marks: {
    link: ({ value, children }: any) => {
      const isExternal = value?.href?.startsWith('http')
      return (
        <a
          href={value.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="text-primary underline hover:opacity-80"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).width(800).url()}
        alt=""
        className="rounded-xl my-8"
      />
    ),
  },
}

export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
