import type { Metadata } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import md from 'markdown-it';

import { findLatestPosts } from '~/utils/posts';

export const metadata: Metadata = {
  title: 'Blog',
};

type Post = { slug: string; title: string; image: string; content: string };

export async function getStaticProps() {
  const posts = await findLatestPosts();
  return { props: { posts } };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <section className="mx-auto  px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="leading-tighter text-center font-heading mb-8  text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">
          Etkinliklerimiz
        </h1>
      </header>
      <div className="grid grid-cols-1 gap-6 mx-auto p-4 md:p-0 max-w-6xl lg:grid-cols-2">
        {posts.map(({ slug, title, image, content }) => (
          <div key={slug} className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Link href={`/${slug}`}>
              <Image width={650} height={340} alt={title} src={`${image}`} />
              <h2 className="p-4 font-bold">{title}</h2>
            </Link>
            <div
              className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
              dangerouslySetInnerHTML={{
                __html: md({
                  html: true,
                }).render(content),
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
