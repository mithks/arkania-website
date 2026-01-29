export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import { sanityClient, urlFor } from '@/lib/sanity'
import PortableTextRenderer from '@/components/PortableTextRenderer'
import ReadingProgress from '@/components/ReadingProgress'

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      body,
      mainImage,
      publishedAt,
      "author": author->{
        name,
        image,
        bio
      }
    }
    `,
    { slug: params.slug }
  )

  if (!post) {
    return (
      <div className="px-6 py-48 text-center text-[24px] text-dark/70">
        Post not found
      </div>
    )
  }

  return (
    <>
    <ReadingProgress />
    <section className="w-full bg-light">
      <article className="max-w-[1500px] mx-auto px-6 md:px-8 py-48 bg-light">

        {/* Meta */}
        <p className="text-[20px] text-dark/60 mb-6">
          {post.publishedAt && new Date(post.publishedAt).toDateString()}
          {post.author?.name && ` • by ${post.author.name}`}
        </p>

        {/* Title */}
        <h1 className="text-[64px] font-bold text-dark leading-tight mb-12">
          {post.title}
        </h1>

        {/* Main Image */}
        {post.mainImage && (
          <img
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            className="rounded-3xl mx-auto mb-16"
          />
        )}

        {/* Content */}
        <div className="prose prose-xl max-w-none text-dark">
          <PortableTextRenderer value={post.body} />
        </div>

        <div className="flex items-center gap-4 mt-6">
          {post.author?.image && (
            <img
              src={urlFor(post.author.image).width(48).height(48).url()}
              alt={post.author.name}
              className="rounded-full"
            />
          )}

          <div>
          <p className="font-medium text-gray-500">
            {post.author?.name || 'Arkania Team'}
          </p>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>

      </article>
    </section>
    </>
  )
}
