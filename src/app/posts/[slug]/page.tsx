import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME, SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";

export default async function Page(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": [
      {
        "@type": "Person",
        "name": post.author.name,
        "url": `${SITE_URL}/about`
      }
    ],
    "image": `${SITE_URL}${post.ogImage.url}`,
    "datePublished": post.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={content} />
      </article>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Blog Template`;
  const baseKeywords = [
    "blog",
    "template",
    "keywords",

    post.title,
    post.author.name,
  ];

  const postKeywords = post.keywords || [];
  const combinedKeywords = [...new Set([...baseKeywords, ...postKeywords])];

  return {
    title,
    description: post.excerpt,
    keywords: combinedKeywords,
    openGraph: {
      title,
      description: post.excerpt,
      images: [post.ogImage.url],
    },
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
