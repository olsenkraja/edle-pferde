import {DocumentRenderer} from '@keystatic/core/renderer'
import {notFound} from 'next/navigation'

import {reader} from '../../../reader'
import Link from 'next/link'
import {ShowcaseYouTubeVideo} from '../../../../components/showcase-youtube-video'
import Image from "next/image";

export default async function Post({params}: { params: { slug: string } }) {
  const {slug} = params

  const post = await reader.collections.posts.read(slug)

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
          <div>
            <DocumentRenderer
              document={await post.content()}
              componentBlocks={{
                'youtube-video': (props) => <ShowcaseYouTubeVideo videoId={props.youtubeVideoId} />,
              }}
            />
          </div>
        </div>
        <div className="lg:ml-20">
          {horses.length > 0 && (
            <ul className="space-y-4">
              {horses.map((horse) => (
                <li key={horse.slug}>
                  <Link href={`/horses/${horse.slug}`} className="text-2xl flex items-center space-x-4 hover:underline">
                    <Image
                      alt=""
                      width="500"
                      height="500"
                      className="w-24 h-24 bg-noble-500 shadow-lg rounded-full"
                      src={horse.profile_picture}
                    />
                    <div>
                    <div>{horse.nickname}</div>
                    <div className="text-sm line-clamp-2">{horse.full_name}</div>
                    </div>
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
