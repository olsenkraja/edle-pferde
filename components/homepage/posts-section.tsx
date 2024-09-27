import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";
import {formatDateLong} from "../../composables/formatting";

export default async function PostsSection() {
  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl space-y-16 px-8 py-24">
        <div className="flex flex-col md:items-center space-y-6">
          <div className="flex flex-col md:items-center space-y-2">
            <div className="font-semibold uppercase leading-none text-noble-500">News</div>
            <div className="text-3xl font-semibold uppercase">Neues aus Pichl</div>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
        </div>
        <div className="flex md:flex-row flex-col rounded-2xl overflow-auto sm:h-[480px] shadow-xl">
          <Link href={`/posts/${posts[0].slug}`} className="md:w-3/5 bg-noble-500">
            <Image alt="" width="500" height="500" className="h-[350px] w-full flex-1 object-cover"
              src={posts[0].entry.cover_image} />
            <div className="space-y-4 p-8 text-white">
              <div className="text-xl line-clamp-2">{posts[0].entry.title}</div>
              <div className="text-sm">{formatDateLong(posts[0].entry.date)}</div>
            </div>
          </Link>
          <div className="md:w-2/5">
            <ul className="md:pt-0 sm:pt-4 sm:overflow-y-scroll overflow-y-hidden sm:h-[480px] h-[336px]">
              {posts.slice(1, 10).map((post) => (
                <li key={post.slug} className="py-4 md:px-8 transition bg-noble-100 hover:bg-noble-200 cursor-pointer">
                  <Link href={`/posts/${post.slug}`} className="flex items-center space-x-4">
                    <Image
                      alt=""
                      width="100"
                      height="100"
                      className="aspect-square size-20 object-cover rounded-xl"
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
