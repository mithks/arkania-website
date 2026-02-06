export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

import { sanityClient } from '@/lib/sanity'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogGrid from '@/components/BlogGrid'

export default async function BlogPage() {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage,
      "author": author->{ name },
      "categories": categories[]->{ title, slug }
    }
  `)

  const categories = await sanityClient.fetch(`
    *[_type == "category"] | order(title asc) {
      title,
      slug
    }
  `)

  return (
    <>
      <Navigation darkBackground />

      <section className="max-w-[1700px] mx-auto px-6 md:px-8 py-36 bg-light">
        <h1 className="text-[36px] md:text-[64px] mx-12 font-bold text-dark mb-10">
          Insights and Expertise
        </h1>

        <BlogGrid posts={posts} categories={categories} />
      </section>

      <Footer />
    </>
  )
}
