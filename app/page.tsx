import Hero from '@/components/ui/Hero';
import { getFeaturedProject } from '@/lib/projects';
import BackGroundImage from '@/public/images/background-1.jpg';
import Link from 'next/link';

export default async function Home() {
  const project = await getFeaturedProject();
  return (
    <main>
      <Hero
        image={BackGroundImage}
        altText={'Back ground image'}
        title={'CKBeam Software'}
        description={'A personal portfolio for Christian Beam'}
      />
      <div className="flex flex-col items-center">
        <div className="">
          <h1 className="text-center mb-6 mt-20 text-8xl">Welcome</h1>
          <hr className="h-px my-6 ml-4 bg-gray-400 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="my-6 text-xl text-start w-[90%] sm:w-[50%] leading-8">
          <p className="p-4">
            I'm Christian, a passionate Full Stack Developer, with expertise in:
          </p>
          <ul className="list-disc ml-8 p-4">
            <li>TypeScript</li>
            <li>Next.js/React</li>
            <li>Python</li>
            <li>AWS Lambda</li>
            <li>Tailwind CSS</li>
          </ul>
          <p className="p-4">
            I've utilized these skills to create user-friendly interfaces,
            robust REST APIs, efficient Lambda functions, and effective CRM
            systems. My Agile development experience has fostered teamwork and
            consistent delivery of high-quality software solutions.
          </p>
        </div>
        <h2 className="text-center my-6 text-4xl">Featured Project</h2>
        <div className="border rounded shadow w-80 hover:shadow-xl sm:w-1/2 mb-20">
          <Link
            href={`/projects/${project.slug}`}
            className="flex flex-col sm:flex-row"
          >
            <img
              src={project.image}
              alt=""
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <div>
              <div className="flex flex-col items-center">
                <h2 className="font-semibold py-1 text-center sm:px-2">
                  {project.title}
                </h2>
                <hr className="h-px my-1 w-[30%] bg-gray-400 border-0 dark:bg-gray-700"></hr>
              </div>
              <p className="py-4 my-2 mx-2 text-lg">{project.description}</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
