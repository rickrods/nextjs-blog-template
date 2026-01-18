import { PostPreview } from "@/app/_components/post-preview";
import { getAllPosts } from "@/lib/api";
import { Intro } from "../_components/intro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Site Title",
  description: "Description goes here.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <Intro />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-16 gap-y-20 md:gap-y-32 mb-32">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </>
  );
}
