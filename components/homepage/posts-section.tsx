import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";

export default async function PostsSection() {
  const posts = await reader.collections.posts.all()

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
                   src="https://www.edle-pferde.com/sites/default/files/2020-02/Gestuet1_0.jpg" />
            <div className="space-y-4 p-8 text-white">
              <div className="text-xl">{posts[0].entry.title}</div>
              <div className="h-1 w-12 bg-white"></div>
              <div className="text-sm">{posts[0].entry.date}</div>
            </div>
          </Link>
          <div className="w-2/5 divide-y divide-noble-500">
            <ul>
              {posts.slice(1, 6).map((post) => (
                <li key={post.slug} className="px-12 py-4 hover:bg-noble-200">
                  <Link href={`/posts/${post.slug}`}>
                    <div className="text-xl">{post.entry.title}</div>
                    <div className="text-sm">{post.entry.date}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
