'use client'

import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { useState } from 'react'

export default function BlogGrid({ posts, categories }: any) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter((post: any) => {
    const matchesCategory = activeCategory
      ? post.categories?.some(
          (cat: any) => cat.slug.current === activeCategory
        )
      : true

    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-6 mb-16 px-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`
            px-6 py-2 rounded-full text-[20px] border transition
            ${
              !activeCategory
                ? 'bg-primary text-light'
                : 'border-dark/20 text-dark hover:border-primary'
            }
          `}
        >
          All
        </button>

        {categories.map((cat: any) => (
          <button
            key={cat.slug.current}
            onClick={() => setActiveCategory(cat.slug.current)}
            className={`
              px-6 py-2 rounded-full text-[20px] border transition
              ${
                activeCategory === cat.slug.current
                  ? 'bg-primary text-light'
                  : 'border-dark/20 text-dark hover:border-primary'
              }
            `}
          >
            {cat.title}
          </button>
        ))}

        {/* Search */}
        <div className="ml-auto max-w-sm w-full">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full rounded-xl px-5 py-4
              bg-light border border-dark/20
              text-dark placeholder:text-dark/50
              focus:outline-none focus:ring-2 focus:ring-primary/40
            "
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredPosts.map((post: any) => (
          <Link
            key={post.slug.current}
            href={`/blog/${post.slug.current}`}
            className="group"
          >
            <div className="
              bg-dark rounded-3xl overflow-hidden
              border border-primary/20
              hover:border-secondary/60
              transition-all
            ">
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

              <div className="p-8">
                {post.publishedAt && (
                  <p className="text-[20px] text-light/60 mb-3">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                )}

                <h2 className="
                  text-[36px] font-bold text-light
                  group-hover:text-secondary transition
                ">
                  {post.title}
                </h2>

                <p className="text-[20px] text-light/60 mt-1">
                  By {post.author?.name || 'Arkania Team'}
                </p>

                {post.excerpt && (
                  <p className="text-[24px] text-light/80 mt-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="text-center text-[24px] text-dark/60 mt-24">
          No articles found.
        </p>
      )}
    </>
  )
}
