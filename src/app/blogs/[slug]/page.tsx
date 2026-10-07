import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blogs";
import { Calendar, Clock, Tag, User, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog Not Found | Green Books" };
  return {
    title: `${post.title} | Green Books Chartered Accountants`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 bg-white">
      {/* Article Header */}
      <section className="bg-[#2E3880] text-white py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A82B] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-300 mb-4">
            <span className="px-3 py-1 rounded-full bg-white/10 text-white font-medium flex items-center gap-1.5">
              <Tag className="w-3 h-3 text-[#00A82B]" /> {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#00A82B]" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#00A82B]" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-[#00A82B]" /> {post.author}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-6 sm:px-12 md:px-16 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed space-y-6">
          <p className="text-lg sm:text-xl font-normal text-gray-800 border-l-4 border-[#00A82B] pl-4 italic bg-[#F4F9F5] py-3 rounded-r-lg">
            {post.excerpt}
          </p>

          {post.content.map((paragraph, index) => (
            <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Expert Takeaway Box */}
          <div className="my-10 p-6 sm:p-8 bg-[#F4F9F5] rounded-2xl border border-green-100">
            <div className="flex items-center gap-3 mb-3 text-[#2E3880]">
              <ShieldCheck className="w-6 h-6 text-[#00A82B]" />
              <h3 className="text-lg font-bold">Key Takeaway from Green Books Advisors</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              Proactive compliance protects your corporate license and avoids costly penalties from regulatory authorities like the FTA and Ministry of Economy. Ensuring your accounting, tax filings, and legal records are properly maintained is fundamental to enduring business success in the UAE.
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-14 p-8 bg-[#2E3880] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Need personalized advice for your enterprise?
            </h3>
            <p className="text-sm text-gray-300 mt-1 font-light">
              Speak with our senior chartered accountants and licensed tax agents at Green Books today.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#00A82B] hover:bg-[#008A22] text-white font-bold px-6 py-3 rounded-xl shrink-0 text-sm flex items-center gap-2 shadow-lg transition-all"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
