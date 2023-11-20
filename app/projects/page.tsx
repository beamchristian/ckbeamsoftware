import type { Metadata } from 'next';
import Link from 'next/link';
import { getProjects } from '@/lib/projects';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl mb-6">Projects</h1>
      <ul className="flex flex-row flex-wrap justify-center gap-3">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/projects/${project.slug}`}>
              <Image
                src={project.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t object-cover aspect-video"
              />
              <h2 className="font-semibold border-t-2 py-1 text-center">
                {project.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
