import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type BlogListItem = {
  title: string;
  publishedAt: string;
  href: string;
  external: boolean;
};

const DEV_TO_POSTS: BlogListItem[] = [
  {
    title: "From Localhost to the Cloud: Deploying my First Node.js App with Docker",
    publishedAt: "2023-08-18",
    href: "https://dev.to/ikemhood/from-localhost-to-the-cloud-deploying-my-first-nodejs-app-with-docker-1nn3",
    external: true,
  },
  {
    title: "The Fake Job Listings That Was Just a Front for Pushing Malware - My Story",
    publishedAt: "2023-09-28",
    href: "https://dev.to/ikemhood/the-fake-job-listings-that-was-just-a-front-for-pushing-malware-my-story-38f6",
    external: true,
  },
];

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}

export async function getBlogListItems() {
  const posts = await getBlogPosts();
  const localPosts = posts.map((post) => ({
    title: post.metadata.title,
    publishedAt: post.metadata.publishedAt,
    href: `/blog/${post.slug}`,
    external: false,
  }));

  return [...localPosts, ...DEV_TO_POSTS];
}
