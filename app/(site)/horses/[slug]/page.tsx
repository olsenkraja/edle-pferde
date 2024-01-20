import {notFound} from 'next/navigation'
import {reader} from '../../../reader'
import Link from 'next/link'
import Image from "next/image";
import {DocumentRenderer} from "@keystatic/core/renderer";
import {ShowcaseYouTubeVideo} from "../../../../components/showcase-youtube-video";

export default async function HorsePage({params}: { params: { slug: string } }) {
  const {slug} = params
  if (!slug) notFound()
  const horse = await reader.collections.horses.read(slug)
  if (!horse) notFound()
  const allPosts = await reader.collections.posts.all()
  const horsePosts = allPosts.filter((post) => post.entry.horses.includes(slug))
  const allHorses = await reader.collections.horses.all()
  const horseChildren = horse.children.map(child => allHorses.find(h => h.slug === child))

  function getHorse(slug: string) {
    return allHorses.find(h => h.slug === slug).entry.full_name
  }

  function getAge(birthdate) {
    const [year, month, day] = birthdate.split('-').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    const germanStrings = [];

    if (years > 0) {
      const germanYearString = years === 1 ? 'Jahr' : 'Jahre';
      germanStrings.push(`${years} ${germanYearString}`);
    }

    if (months > 0) {
      const germanMonthString = months === 1 ? 'Monat' : 'Monate';
      germanStrings.push(`${months} ${germanMonthString}`);
    }

    return germanStrings.length > 0 ? germanStrings.join(' und ') + ' alt' : 'Neugeboren';

  }

  return (
    <div className="mx-auto max-w-screen-xl mt-12 mb-32 px-8">
      <div className="prose lg:prose-xl max-w-none">
        <h1>{horse.nickname}</h1>
        <h2>{horse.full_name}</h2>
        <span>{horse.birthdate ? getAge(horse.birthdate) : null}</span>
        <div className="flex space-x-8">
          <Image
            alt=""
            width="500"
            height="500"
            className="w-1/3 object-cover"
            src={horse.profile_picture}
          />
          <p className="w-2/3">{horse.bio}</p>
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
          <ul>
            {horseChildren.map((child) => (
              <li key={child.slug}>
                <Link href={`/horses/${child.slug}`}>{child.entry.nickname}</Link>
              </li>
            ))}
          </ul>
        )}
        <DocumentRenderer
          document={await horse.content()}
          componentBlocks={{
            'youtube-video': (props) => <ShowcaseYouTubeVideo videoId={props.youtubeVideoId} />,
          }}
        />
        {horsePosts.length > 0 && (
          <>
            <h2>Posts über {horse.nickname}</h2>
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
