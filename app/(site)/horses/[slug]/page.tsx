import { notFound } from 'next/navigation'
import Image from 'next/image'
import { reader } from '../../../reader'
import Link from 'next/link'
import { ShowcaseLink } from '../../../../components/showcase-link'
import { ShowcaseYouTubeVideo } from '../../../../components/showcase-youtube-video'

export default async function HorsePage({ params }: { params: { slug: string } }) {
  const { slug } = params
  if (!slug) notFound()
  const horse = await reader.collections.horses.read(slug)
  if (!horse) notFound()
  const allPosts = await reader.collections.posts.all()
  const horsePosts = allPosts.filter((post) => post.entry.horses.includes(slug))
  return (
    <div>
      <h1>{horse.name}</h1>
      {horse.showcase.length > 0 && (
        <>
          <hr />
          <h2>Showcase</h2>
          <ul>
            {horse.showcase.map((item, index) => (
              <li key={index}>
                {item.discriminant === 'link' && (
                  <ShowcaseLink url={item.value.url} label={item.value.label} />
                )}
                {item.discriminant === 'youtubeVideoId' && (
                  <ShowcaseYouTubeVideo videoId={item.value} />
                )}
              </li>
            ))}
          </ul>
        </>
      )}
      {horsePosts.length > 0 && (
        <>
          <hr />
          <h2>Posts written</h2>
          <ul>
            {horsePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/${post.slug}`}>{post.entry.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  const horseSlugs = await reader.collections.horses.list()
  return horseSlugs.map((horseSlug) => ({ slug: horseSlug }))
}
