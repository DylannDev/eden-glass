import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { type BlogPost, formatDate } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  bgColor?: "gray" | "white";
}

export default function BlogCard({ post, bgColor = "gray" }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group p-2 flex flex-col overflow-hidden rounded-xl transition-all duration-500 hover:bg-yellow",
        bgColor === "gray" ? "bg-gray" : "bg-white"
      )}
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-md">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-yellow px-3 py-1 text-xs font-medium text-black">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between gap-4 text-sm text-gray-dark">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-medium text-black line-clamp-2">
          {post.title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-base font-medium text-black">
            Lire l&apos;article
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:-rotate-45">
            <ArrowRight className="h-5 w-5 text-white" />
          </span>
        </div>
      </div>
    </Link>
  );
}
