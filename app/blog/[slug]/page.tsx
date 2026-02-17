import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts, getBlogPost, formatDate } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { ServiceCard } from "@/components/home/Services";
import ArrowButton from "@/components/ui/arrow-button";
import BlogCard from "@/components/blog/BlogCard";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article non trouvé | Eden Glass",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.image],
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Get related services
  const relatedServices =
    post.relatedServices
      ?.map((serviceSlug) => getServiceBySlug(serviceSlug))
      .filter(Boolean) || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://edenglass.fr${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Eden Glass",
      url: "https://edenglass.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Eden Glass",
      url: "https://edenglass.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://edenglass.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://edenglass.fr/blog/${slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "fr-FR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-5">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-gray-dark transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au blog
          </Link>

          <div className="mb-6">
            <span className="rounded-full bg-yellow px-3 py-1 text-sm font-medium text-black">
              {post.category}
            </span>
          </div>

          <h1 className="mb-6 text-2xl font-medium text-black md:text-3xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-dark">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} de lecture
            </span>
            <span>Par {post.author}</span>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-5">
          <div className="relative aspect-video sm:aspect-21/9 w-full overflow-hidden rounded-xl bg-gray">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-5">
          <article
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-gray py-20 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5">
            <h2 className="mb-10 text-center text-2xl font-medium text-black md:text-3xl">
              Services associés
            </h2>
            <div
              className={`grid gap-6 justify-center ${relatedServices.length <= 2 ? "sm:grid-cols-2 max-w-[900px] mx-auto" : "sm:grid-cols-2 lg:grid-cols-3"}`}
            >
              {relatedServices.map((service) => (
                <ServiceCard
                  key={service!.slug}
                  {...service!}
                  bgColor="white"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Articles */}
      {otherPosts.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-[1320px] px-5">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-medium text-black md:text-3xl">
                Autres articles
              </h2>
              <div className="md:hidden">
                <ArrowButton href="/blog" variant="black" size="sm">
                  Voir tous les articles
                </ArrowButton>
              </div>
              <div className="hidden md:block">
                <ArrowButton href="/blog" variant="black">
                  Voir tous les articles
                </ArrowButton>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((otherPost) => (
                <BlogCard
                  key={otherPost.slug}
                  post={otherPost}
                  bgColor="gray"
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
