import {reader} from '../../reader'
import Link from "next/link";
import Image from "next/image";
import {formatDateLong} from "../../../composables/formatting";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Edle Pferde | News',
  description: 'Trakehner Gestüt Pichl',
  openGraph: {
    title: 'Edle Pferde | News',
    description: 'Trakehner Gestüt Pichl',
    images: '/public/logo.png',
  }
}

export default async function PostsPage() {
  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  return (
    <div className="mx-auto max-w-screen-xl my-20">
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <li key={post.slug} className="p-8 hover:bg-noble-200 transition">
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                <Image
                  alt=""
                  width="200"
                  height="200"
                  className="aspect-square md:w-24 object-cover rounded-lg shadow-lg"
                  src={post.entry.cover_image}
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl font-semibold md:line-clamp-2">{post.entry.title}</h2>
                  <p className="text-sm mt-4">{formatDateLong(post.entry.date)}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}