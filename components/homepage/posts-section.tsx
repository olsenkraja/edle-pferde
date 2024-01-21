import { reader } from '../../app/reader'
import Image from "next/image";
import Link from "next/link";
import { formatDateLong } from "../../composables/formatting";

export default async function PostsSection() {
  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  return (
    <div className="bg-noble-25">
      <div className="relative mx-auto max-w-screen-xl space-y-16 px-8 py-24">
        <div className="flex flex-col md:items-center space-y-6">
          <div className="flex flex-col md:items-center space-y-2">
            <div className="font-semibold uppercase leading-none text-noble-500">News & Blog</div>
            <div className="text-3xl font-semibold uppercase">Latest News & Knowledge</div>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
        </div>
        <div className="flex md:flex-row flex-col">
          <Link href={`/posts/${posts[0].slug}`} className="md:w-3/5 bg-noble-900">
            <Image alt="" width="500" height="500" className="h-80 w-full flex-1 object-cover"
              src={posts[0].entry.cover_image} />
            <div className="space-y-4 p-8 text-white">
              <div className="text-xl line-clamp-2">{posts[0].entry.title}</div>
              <div className="h-1 w-12 bg-white"></div>
              <div className="text-sm">{formatDateLong(posts[0].entry.date)}</div>
            </div>
          </Link>
          <div className="md:w-2/5">
            <ul className='md:pt-0 pt-4'>
              {posts.slice(1, 5).map((post) => (
                <li key={post.slug} className="py-4 md:px-8 transition hover:bg-noble-200 cursor-pointer">
                  <Link href={`/posts/${post.slug}`} className="flex items-center space-x-4">
                    <Image
                      alt=""
                      width="100"
                      height="100"
                      className="aspect-square size-20 object-cover"
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
          <Link href={`/posts`}
            className="bg-noble-500 mx-8 px-6 py-3 font-semibold uppercase leading-none text-noble-900"
          >
            Mehr lesen
          </Link>
        </div>
      </div>
    </div>
  )
}
