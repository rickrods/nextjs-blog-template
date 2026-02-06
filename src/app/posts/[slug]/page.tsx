import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
// Removed Header and Container imports as they are global again.
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.ogImage.url,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": `${SITE_URL}/about`,
    },
    "description": post.excerpt,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Removed Container and Header as they are now in root layout */}
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const title = `${post.title} | ${SITE_NAME}`;
  const description = post.excerpt;

  const baseKeywords = [
    "blog",
    "template",
    SITE_NAME,
    post.title,
    post.author.name,
  ];

  const postKeywords = post.keywords || []; // Assuming post.keywords is an array of strings or undefined
  const combinedKeywords = [...new Set([...baseKeywords, ...postKeywords])];

  return {
    title,
    description,
    keywords: combinedKeywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/posts/${post.slug}`,
      images: [
        {
          url: post.ogImage.url,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.ogImage.url],
    },
    alternates: {
      canonical: `${SITE_URL}/posts/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}
