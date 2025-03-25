import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";
import {formatDateLong} from "../../composables/formatting";

export default async function PostsSection() {
  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative mx-auto max-w-screen-xl space-y-16 px-8 py-24">
        <div className="flex flex-col md:items-center space-y-6">
          <div className="flex flex-col md:items-center space-y-2">
            <div className="font-semibold uppercase leading-none text-noble-500">News</div>
            <h1 className="text-3xl font-semibold uppercase">Neues aus Pichl</h1>
          </div>
          <Link href={`/posts/${posts[0].slug}`} className="w-full px-32">
            <Image
              alt=""
              width="500"
              height="500"
              className="aspect-[3/2] rounded-xl w-full flex-1 object-cover"
              src={posts[0].entry.cover_image}
            />
            <div className="space-y-4 py-8">
              <div className="text-xl line-clamp-2">{posts[0].entry.title}</div>
              <div className="text-sm">{formatDateLong(posts[0].entry.date)}</div>
            </div>
          </Link>
          <div className="overflow-x-auto whitespace-nowrap">
            <ul className="inline-flex space-x-4">
              {posts.slice(1, 5).map((post) => (
                <li key={post.slug} className="cursor-pointer w-64 flex-shrink-0 overflow-hidden">
                  <Link href={`/posts/${post.slug}`} className="">
                    <Image
                      alt=""
                      width="300"
                      height="300"
                      className="aspect-square object-cover rounded-xl"
                      src={post.entry.cover_image}
                    />
                    <div>
                      <div className="text-xl line-clamp-1">{post.entry.title}</div>
                      <div className="text-sm">{formatDateLong(post.entry.date)}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href={`/posts`}
            className="flex items-center justify-center bg-noble-500 text-white px-8 py-4 text-lg font-semibold uppercase leading-none w-fit rounded-full"
          >
            Mehr lesen
          </Link>
        </div>
      </div>
    </div>
  )
}
