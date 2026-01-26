import Link from 'next/link'
import { sanityClient, urlFor } from '@/lib/sanity'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default async function BlogPage() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }
  `)

  return (
    <>
    <Navigation darkBackground />
    <section className="max-w-[1700px] mx-auto px-6 md:px-8 py-48 bg-light">
      
      {/* Page Heading */}
      <h1 className="text-[64px] mx-12 font-bold text-dark mb-20">
        Insights and Expertise
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts.map((post: any) => (
          <Link
            key={post.slug.current}
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            {/* Card */}
            <div
              className="
                glass
                rounded-3xl
                overflow-hidden
                border border-primary/20
                hover:border-secondary/60
                transition-all duration-300
              "
            >
              {/* Image */}
              {post.mainImage && (
                <div className="overflow-hidden">
                  <img
                    src={urlFor(post.mainImage).width(600).height(400).url()}
                    alt={post.title}
                    className="
                      w-full h-64 object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                {/* Date */}
                {post.publishedAt && (
                  <p className="text-[20px] text-dark/60 mb-3">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                )}

                {/* Title */}
                <h2 className="
                  text-[36px] font-bold text-dark
                  group-hover:text-secondary
                  transition-colors
                ">
                  {post.title}
                </h2>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-[24px] text-dark/70 mt-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    <Footer />
    </>
  )
}
