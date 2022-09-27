import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm doing now"
        url={siteMetadata.url}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            What I'm Doing Now
          </h1>
        </div>
        {/* Work */}
        <div className="container py-12">
          <span>
            I work as a software developer at{' '}
            <Link
              href={'https://maul.is'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              Maul{' '}
            </Link>
            <br />
          </span>
          <p>We deliver various and delicous lunch to workplaces in Reykjavík.</p>
          <br />
          <p>
            We at Maul strive to improve the quality of your lunch by offering courses from multiple
            restaurants and saving you from the constant "what should I have for lunch" conundrum.
          </p>
          <br />
          <p>
            At this moment I'm mostly using technology such as React, Tailwind, AWS lambda, S3, and
            more. We recently started to migrate to Vervel from AWS S3
          </p>
          <br />
          <p>
            I recently started a project to update a part of our data to match our new data model.
            It's not the most fun projerct to do, but it's important for us to finish this project.
          </p>
          <p>It will help us a lot in regard to other projects we have.</p>
          <br />
          <p>
            I finished the TypeScript basics course and I've started on the Everyday TypeScript
            course on{' '}
            <Link
              href={'https://www.executeprogram.com/courses'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              Execute Programming.
            </Link>
          </p>
          <p>
            I like the execute programming method of courses since they use spaced-repition. I
            believe that is on of the best way to learn.
          </p>
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I've been slowly building this website, trying to share interesting things with anyone
            who wants to read it.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              This
            </Link>{' '}
            article is a great reason to start your blog.
          </p>
          <br />
          <p>
            I published a short e-book about how to make LaTeX templates for your homework, aimed
            towards beginners.
            <Link
              href={'http://einargudni.com/my-books'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              It's available here.
            </Link>
          </p>
          <br />
          <p>
            I started to play around with{' '}
            <Link
              href={'https://remix.run/'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
            >
              remix.
            </Link>{' '}
            The hype is real. I've been wanting to dive more into it and get to know it better. I'll
            write a blog post about it soon ans share my thoughts.
          </p>
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-800"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}
