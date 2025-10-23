import BlurFade from "@/components/magicui/blur-fade";
import { getBlogListItems } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogListItems();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.href}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={post.href}
              target={post.external ? "_blank" : undefined}
              rel={post.external ? "noopener noreferrer" : undefined}
              prefetch={!post.external}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
