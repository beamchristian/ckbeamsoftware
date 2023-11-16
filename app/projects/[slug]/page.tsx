import type { Metadata } from 'next';

import { getProject, getSlugs } from '@/lib/projects';
import ShareLink from '@/components/ShareLink';
import Link from 'next/link';

interface ProjectPageParams {
  slug: string;
}

interface ProjectPageProps {
  params: ProjectPageParams;
}

export async function generateStaticParams(): Promise<ProjectPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProject(slug);
  return {
    title: project.title,
  };
}

export default async function ProjectPage({
  params: { slug },
}: ProjectPageProps) {
  const project = await getProject(slug);
  return (
    <div className="m-4 project-container">
      <h1 className="text-lg">{project.title}</h1>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{project.date}</p>
        <ShareLink />
      </div>
      <img
        src={project.image}
        alt="project preview image"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article className="max-w-screen-sm prose prose-slate">
        {project.body}
        <p className="text-lg">
          <span className="font-semibold">Repo: </span>
          <Link className="underline" href={project.repo}>
            {project.title}
          </Link>
        </p>
      </article>
    </div>
  );
}
