import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { AUTHORS } from '../content/config';
const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection('blog');

    // const postImportResult = import.meta.glob('../content/blog/**/*.md', { eager: true });
    // const posts = Object.values(postImportResult);
    return rss({
        title: 'Tembo’s Blog',
        description: 'Latest news and technical blog posts from membors of the Tembo team and community!',
        site: context.site,
        items: blog.map((post, index) => {
            const dateString = post.id.substring(0, 10);
            const parsedDate = post.data?.date || new Date(dateString);
            return {
                title: post.data.title,
                pubDate: new Date(parsedDate).toISOString(),
                author: AUTHORS[post.data.authors[0]].name,
                description: post.data.description,
                link: `/blog/${post.slug}/`,
                customData: `<content type='html'>${parser.render(post.body)}</content>`
            };
        }),
    });
}
