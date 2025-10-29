import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getTinyWins() {
  const tinywinsDirectory = path.join(__dirname, '../tinywins');
  const filenames = getAllMdxFiles(tinywinsDirectory);
  
  const wins = filenames
    .map((filepath) => {
      const fileContents = fs.readFileSync(filepath, 'utf8');
      const { data, content } = matter(fileContents);
      
      // Extract slug from filepath
      const relativePath = path.relative(tinywinsDirectory, filepath);
      const slug = `/tinywins${relativePath.replace(/\.mdx?$/, '').replace(/\/index$/, '')}`;
      
      return {
        frontmatter: data,
        slug,
        body: content,
        excerpt: content.substring(0, 200) + '...',
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || 0);
      const dateB = new Date(b.frontmatter.date || 0);
      return dateB - dateA;
    });
  
  return wins;
}

export function getTinyWinBySlug(slug) {
  const wins = getTinyWins();
  const normalizedSlug = slug.startsWith('/tinywins/') ? slug : `/tinywins/${slug}`;
  return wins.find((win) => win.slug === normalizedSlug);
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

