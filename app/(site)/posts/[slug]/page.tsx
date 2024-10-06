import {notFound} from 'next/navigation'

import {reader} from '../../../reader'
import Link from 'next/link'
import Image from "next/image";
import {MDX} from "../../../../components/mdx";

export default async function Post({params}: { params: { slug: string } }) {
  const {slug} = params

  const post = await reader.collections.posts.read(slug)
  const content = await post.content()

  if (!post) notFound()

  const horses = await Promise.all(
    post.horses.map(async (horseSlug) => ({
      ...(await reader.collections.horses.read(horseSlug)),
      slug: horseSlug,
    }))
  )

  return (
    <div className="mx-auto max-w-screen-xl mt-12 mb-32 px-8">
      <div className="block lg:flex">
        <div className="prose lg:prose-xl">
          <h1>{post.title}</h1>
          <Image alt="" width="850" height="850" className="w-full object-cover"
                 src={post.cover_image} />
          <article>
            <MDX source={content} />
          </article>
        </div>
        <div className="lg:ml-20">
          {horses.length > 0 && (
            <ul className="space-y-4">
              {horses.map((horse) => (
                <li key={horse.slug}>
                  <Link href={`/horses/${horse.slug}`} className="text-lg flex items-center space-x-4 hover:underline">
                    <Image
                      width="100"
                      height="100"
                      className="size-24 bg-noble-500 shadow-2xl rounded-full min-w-24 outline outline-1 outline-gray-500"
                      src={horse.profile_picture}
                      alt={horse.profile_picture_alt_text}
                    />
                    <span>{horse.full_name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list()

  return slugs.map((slug) => ({
    slug,
  }))
}
