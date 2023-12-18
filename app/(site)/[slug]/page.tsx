import { DocumentRenderer } from '@keystatic/core/renderer'
import { notFound } from 'next/navigation'

import { reader } from '../../reader'
import Image from 'next/image'
import Link from 'next/link'
import { ShowcaseYouTubeVideo } from '../../../components/showcase-youtube-video'

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params

  const post = await reader.collections.posts.read(slug)

  if (!post) notFound()

  const horses = await Promise.all(
    post.horses.map(async (horseSlug) => ({
      ...(await reader.collections.horses.read(horseSlug)),
      slug: horseSlug,
    }))
  )

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <DocumentRenderer
          document={await post.content()}
          componentBlocks={{
            'youtube-video': (props) => <ShowcaseYouTubeVideo videoId={props.youtubeVideoId} />,
          }}
        />
      </div>
      {horses.length > 0 && (
        <>
          <hr />
          <h2>Written by</h2>
          <ul>
            {horses.map((horse) => (
              <li key={horse.slug}>
                <h3>
                  <Link href={`/horses/${horse.slug}`}>{horse.name}</Link>
                </h3>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list()

  return slugs.map((slug) => ({
    slug,
  }))
}
