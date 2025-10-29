import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getPosts() {
  const postsDirectory = path.join(__dirname, '../posts');
  const filenames = getAllMdxFiles(postsDirectory);
  
  const posts = filenames
    .map((filepath) => {
      const fileContents = fs.readFileSync(filepath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Only include visible posts
      if (data.visible !== true) return null;
      
      // Extract slug from filepath
      const relativePath = path.relative(postsDirectory, filepath);
      const slug = `/blog${relativePath.replace(/\.mdx?$/, '').replace(/\/index$/, '')}`;
      
      return {
        frontmatter: data,
        slug,
        content,
        excerpt: content.substring(0, 200) + '...',
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB - dateA;
    });
  
  return posts;
}

export function getPostBySlug(slug) {
  const posts = getPosts();
  const normalizedSlug = slug.startsWith('/blog/') ? slug : `/blog/${slug}`;
  return posts.find((post) => post.slug === normalizedSlug);
}

export function getPostsByTag(tag) {
  const posts = getPosts();
  return posts.filter((post) => 
    post.frontmatter.tags && 
    post.frontmatter.tags.includes(tag)
  );
}

export function getAllTags() {
  const posts = getPosts();
  const tagSet = new Set();
  posts.forEach((post) => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag) => tagSet.add(tag));
    }
  });
  return Array.from(tagSet);
}

function getAllMdxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMdxFiles(filePath, fileList);
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

