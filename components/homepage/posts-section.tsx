import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";

export default async function PostsSection() {
  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  function formatDate(input: string | number | Date) {
    const date = new Date(input);
    const germanDate = new Intl.DateTimeFormat('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });

    return germanDate.format(date);
  }


  return (
    <div className="bg-noble-25">
      <div className="relative mx-auto max-w-screen-xl space-y-16 px-8 py-24">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="font-semibold uppercase leading-none text-noble-500">News & Blog</div>
            <div className="text-3xl font-semibold uppercase">Latest News & Knowledge</div>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
        </div>
        <div className="flex">
          <Link href={`/posts/${posts[0].slug}`} className="w-3/5 bg-noble-900">
            <Image alt="" width="500" height="500" className="h-80 w-full flex-1 object-cover"
                   src={posts[0].entry.cover_image} />
            <div className="space-y-4 p-8 text-white">
              <div className="text-xl line-clamp-2">{posts[0].entry.title}</div>
              <div className="h-1 w-12 bg-white"></div>
              <div className="text-sm">{formatDate(posts[0].entry.date)}</div>
            </div>
          </Link>
          <div className="w-2/5">
            <ul>
              {posts.slice(1, 5).map((post) => (
                <li key={post.slug} className="py-4 px-8 hover:bg-noble-200 cursor-pointer">
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
                      <div className="text-sm">{formatDate(post.entry.date)}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-end">
              <Link href={`/posts`}
                    className="bg-noble-500 mx-8 px-6 py-3 font-semibold uppercase leading-none text-noble-900"
              >
                Mehr lesen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
