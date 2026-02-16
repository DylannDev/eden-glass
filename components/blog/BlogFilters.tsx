"use client";

import { useState } from "react";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog";
import BlogCard from "./BlogCard";
import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const POSTS_PER_PAGE = 9;

export default function BlogFilters() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all"
  );
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function scrollToGrid() {
    const el = document.getElementById("blog-grid");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    scrollToGrid();
  }

  function handleCategoryChange(category: BlogCategory | "all") {
    setActiveCategory(category);
    setCurrentPage(1);
  }

  function getPageNumbers() {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  }

  return (
    <>
      {/* Category Filters */}
      <div id="blog-grid" className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => handleCategoryChange("all")}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "bg-black text-white"
              : "bg-gray text-black hover:bg-black/10"
          )}
        >
          Tous les articles
        </button>
        {blogCategories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategoryChange(category.value)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === category.value
                ? "bg-black text-white"
                : "bg-gray text-black hover:bg-black/10"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} bgColor="gray" />
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-dark">Aucun article dans cette catégorie.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={
                  currentPage === 1 ? "opacity-40 pointer-events-none" : ""
                }
              />
            </PaginationItem>

            {getPageNumbers().map((page, i) =>
              page === "ellipsis" ? (
                <PaginationItem key={`ellipsis-${i}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className={
                  currentPage === totalPages
                    ? "opacity-40 pointer-events-none"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
