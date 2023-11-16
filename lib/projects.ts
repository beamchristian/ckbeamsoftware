import { readdir, readFile } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';
import parse from 'html-react-parser';

export interface Project {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: React.ReactNode
  description: string;
  repo: string;
}

export async function getFeaturedProject(): Promise<Project> {
  const projects = await getProjects();
  return projects[0];
}

export async function getProject(slug: string): Promise<Project> {
  const text = await readFile(`./content/projects/${slug}.md`, 'utf8');
  const { content, data: { title, date, image, description, repo } } = matter(text);
  const body = parse(marked(content));
  console.log(body);
  return { slug, title, date, image, body, description, repo };
}

export async function getProjects(): Promise<Project[]> {
  const slugs = await getSlugs();
  const projects: Project[] = [];
  for (const slug of slugs) {
    const project = await getProject(slug);
    projects.push(project);
  }
  projects.sort((a, b) => b.date.localeCompare(a.date));
  return projects;
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir('./content/projects');
  return files.filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
}
