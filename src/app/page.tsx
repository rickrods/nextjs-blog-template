import Container from "@/app/_components/container";
import HeroPost from "@/app/_components/hero-post";
import Intro from "@/app/_components/intro";
import MoreStories from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import { CMS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  description: `Exploring the world of ${CMS_NAME}.`,
};

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const moreStories = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {moreStories.length > 0 && <MoreStories posts={moreStories} />}
      </Container>
    </main>
  );
}
