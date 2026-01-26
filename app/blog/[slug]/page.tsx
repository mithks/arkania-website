import { sanityClient, urlFor } from '@/lib/sanity'

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
      author->{
        name
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
    <article className="max-w-[1000px] mx-auto px-6 md:px-8 py-48 bg-light">

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
          className="rounded-3xl mb-16"
        />
      )}

      {/* Content */}
      <div className="space-y-8">
        {post.body?.map((block: any, i: number) => (
          <p
            key={i}
            className="text-[24px] text-dark/80 leading-relaxed"
          >
            {block.children?.[0]?.text}
          </p>
        ))}
      </div>

    </article>
  )
}
