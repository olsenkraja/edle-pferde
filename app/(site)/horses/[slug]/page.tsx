import {notFound} from 'next/navigation'
import {reader} from '../../../reader'
import Link from 'next/link'
import Image from "next/image";
import {MDX} from "../../../../components/mdx";

const seoTags = {
  title: 'Edle Pferde',
  description: 'Trakehner Gestüt Pichl',
  openGraph: {
    title: 'Edle Pferde',
    description: 'Trakehner Gestüt Pichl',
    images: '/public/logo.png',
  }
}

export default async function HorsePage({params}: { params: { slug: string } }) {
  const {slug} = params
  if (!slug) notFound()
  const horse = await reader.collections.horses.read(slug)

  seoTags.title = horse.full_name
  seoTags.openGraph.title = horse.full_name
  seoTags.description = horse.birth_year + ', ' + horse.breed
  seoTags.openGraph.description = horse.birth_year + ', ' + horse.breed
  seoTags.openGraph.images = horse.profile_picture

  if (!horse) notFound()
  const content = await horse.content()

  const allPosts = await reader.collections.posts.all()
  const horsePosts = allPosts.filter((post) => post.entry.horses.includes(slug))
  const allHorses = await reader.collections.horses.all()
  const horseChildren = horse.children.map(child => allHorses.find(h => h.slug === child))

  function getHorse(slug: string) {
    return allHorses.find(h => h.slug === slug).entry.full_name
  }

  return (
    <div className="mx-auto max-w-screen-xl mt-12 mb-32 px-8">
      <div className="prose lg:prose-lg max-w-none">
        <h1>{horse.full_name}</h1>
        {horse.birth_year &&
          <div className="text-xl font-semibold flex space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                    d="M11.5.5c.5.25 1.5 1.9 1.5 3S12.33 5 11.5 5S10 4.85 10 3.75S11 2 11.5.5m7 8.5C21 9 23 11 23 13.5c0 1.56-.79 2.93-2 3.74V23H3v-5.76c-1.21-.81-2-2.18-2-3.74C1 11 3 9 5.5 9H10V6h3v3zM12 16a2.5 2.5 0 0 0 2.5-2.5H16a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 13.5A2.5 2.5 0 0 0 5.5 16A2.5 2.5 0 0 0 8 13.5h1.5A2.5 2.5 0 0 0 12 16" />
            </svg>
            <span>{horse.birth_year}</span>
          </div>
        }
        {horse.breed &&
          <div className="text-xl font-semibold flex space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
              <path fill="currentColor"
                    d="m509.8 332.5l-69.9-164.3c-14.9-41.2-50.4-71-93-79.2c18-10.6 46.3-35.9 34.2-82.3c-1.3-5-7.1-7.9-12-6.1L166.9 76.3C35.9 123.4 0 238.9 0 398.8V480c0 17.7 14.3 32 32 32h236.2c23.8 0 39.3-25 28.6-46.3L256 384v-.7c-45.6-3.5-84.6-30.7-104.3-69.6c-1.6-3.1-.9-6.9 1.6-9.3l12.1-12.1c3.9-3.9 10.6-2.7 12.9 2.4c14.8 33.7 48.2 57.4 87.4 57.4c17.2 0 33-5.1 46.8-13.2l46 63.9c6 8.4 15.7 13.3 26 13.3h50.3c8.5 0 16.6-3.4 22.6-9.4l45.3-39.8c8.9-9.1 11.7-22.6 7.1-34.4M328 224c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24" />
            </svg>
            <span>{horse.breed}</span>
          </div>
        }
        {horse.size &&
          <div className="text-xl font-semibold flex space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
              <path fill="currentColor"
                    d="m235.32 73.37l-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63M84.68 224L32 171.31l32-32l26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128L96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96L128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z" />
            </svg>
            <span>{horse.size}</span>
          </div>
        }
        {horse.color &&
          <div className="text-xl font-semibold flex space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
              <path fill="currentColor"
                    d="M13 11c1.334 1.393 2 2.435 2 3.125C15 15.161 14.105 16 13 16c-1.104 0-2-.84-2-1.875c0-.69.667-1.732 2-3.125M5.857.15l6.34 6.45l.016.02l.324.321a1.5 1.5 0 0 1 .11 2.006l-.103.114l-4.474 4.513a1.5 1.5 0 0 1-2.123.008L1.464 9.06a1.5 1.5 0 0 1 .007-2.12l4.472-4.45c.145-.146.313-.254.492-.327L5.144.85a.5.5 0 0 1 .713-.7m1.496 3.049a.5.5 0 0 0-.705 0L2.177 7.65a.498.498 0 0 0-.148.35h9.95a.498.498 0 0 0-.148-.35L7.353 3.2z" />
            </svg>
            <span>{horse.color}</span>
          </div>
        }
        <div className="md:flex md:space-x-8">
          <Image
            alt=""
            width="500"
            height="500"
            className="md:w-1/3 object-cover aspect-square"
            src={horse.profile_picture}
          />
          <div className="md:w-2/3">{horse.bio}</div>
        </div>
        <div className="grid grid-cols-2 gap-0.5">
          <div className="col-span-1 row-span-2 bg-noble-200 flex items-center p-4">
            <div>
              {horse.father.discriminant
                ?
                <Link href={`/horses/${horse.father.value}`}>
                  {getHorse(horse.father.value)}
                </Link>
                :
                horse.father.value
              }
            </div>
          </div>
          <div className="col-span-1 bg-noble-200 flex items-center p-4">
            <div>
              {horse.fathers_father.discriminant
                ?
                <Link href={`/horses/${horse.fathers_father.value}`}>
                  {getHorse(horse.fathers_father.value)}
                </Link>
                :
                horse.fathers_father.value
              }
            </div>
          </div>
          <div className="col-span-1 bg-noble-200 flex items-center p-4">
            <div>
              {horse.fathers_mother.discriminant
                ?
                <Link href={`/horses/${horse.fathers_mother.value}`}>
                  {getHorse(horse.fathers_mother.value)}
                </Link>
                :
                horse.fathers_mother.value
              }
            </div>
          </div>
          <div className="col-span-1 row-span-2 bg-noble-200 flex items-center p-4">
            <div>
              {horse.mother.discriminant
                ?
                <Link href={`/horses/${horse.mother.value}`}>
                  {getHorse(horse.mother.value)}
                </Link>
                :
                horse.mother.value
              }
            </div>
          </div>
          <div className="col-span-1 bg-noble-200 flex items-center p-4">
            <div>
              {horse.mothers_father.discriminant
                ?
                <Link href={`/horses/${horse.mothers_father.value}`}>
                  {getHorse(horse.mothers_father.value)}
                </Link>
                :
                horse.mothers_father.value
              }
            </div>
          </div>
          <div className="col-span-1 bg-noble-200 flex items-center p-4">
            <div>
              {horse.mothers_mother.discriminant
                ?
                <Link href={`/horses/${horse.mothers_mother.value}`}>
                  {getHorse(horse.mothers_mother.value)}
                </Link>
                :
                horse.mothers_mother.value
              }
            </div>
          </div>
        </div>
        {horseChildren.length > 0 && (
          <>
            <h3>Nachkommen</h3>
            <ul>
              {horseChildren.map((child) => (
                <li key={child.slug}>
                  <Link href={`/horses/${child.slug}`}>{child.entry.full_name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        <article>
          <MDX source={content} />
        </article>
        {horsePosts.length > 0 && (
          <>
            <h2>Posts über {horse.full_name}</h2>
            <ul>
              {horsePosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/posts/${post.slug}`}>{post.entry.title}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const horseSlugs = await reader.collections.horses.list()
  return horseSlugs.map((horseSlug) => ({slug: horseSlug}))
}

import type { Metadata } from 'next'
export const metadata: Metadata = seoTags