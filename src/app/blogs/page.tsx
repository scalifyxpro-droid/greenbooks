import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs & Insights | Green Books Chartered Accountants UAE",
  description: "Explore the latest insights, regulatory updates, UAE tax guides, accounting trends, and business setup advice from Green Books.",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Hero */}
      <section className="bg-[#2E3880] text-white py-16 px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#00A82B]">
            Knowledge &amp; Regulatory Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            Blogs &amp; Articles
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto font-light">
            Stay informed with the latest updates on UAE Corporate Tax, VAT regulations, statutory audit standards, and company formation.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 px-6 sm:px-12 md:px-16 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#00A82B]"
            >
              <div className="p-7">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A82B]/10 text-[#00A82B] font-semibold">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-[#2E3880] group-hover:text-[#00A82B] transition-colors leading-snug mb-3">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-sm text-gray-600 font-light leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-7 py-4 bg-[#F4F9F5] border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">By {post.author}</span>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-xs font-bold text-[#00A82B] group-hover:text-[#008A22] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
