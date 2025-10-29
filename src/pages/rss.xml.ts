import rss from '@astrojs/rss';
import { getPosts } from '../utils/getPosts';

export async function GET() {
  const posts = getPosts();

  return rss({
    title: 'CodeGregg Blog',
    description:
      'Minneapolis-based UI engineer; many-stack artisinal crafter of the internet.',
    site: 'https://codegregg.com',
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      description: post.excerpt,
      pubDate: new Date(post.frontmatter.date),
      link: `https://codegregg.com${post.slug}`,
      content: post.content.substring(0, 1000),
    })),
  });
}
