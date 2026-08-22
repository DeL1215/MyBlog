import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET(context: { site: URL }) {
  const base = import.meta.env.BASE_URL;
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

  return rss({
    title: `${siteConfig.nickname}的文章`,
    description: `${siteConfig.nickname}的製作紀錄與個人想法。`,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `${base}blog/${post.id}/`,
    })),
  });
}
