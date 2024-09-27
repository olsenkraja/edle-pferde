import {reader} from '../../reader'
import Link from "next/link";
import Image from "next/image";
import {formatDateLong} from "../../../composables/formatting";

export default async function PostsPage({params}: { params: { slug: string } }) {
  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  return (
    <div className="mx-auto max-w-screen-xl my-20">
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <li key={post.slug} className="p-8 hover:bg-noble-200 transition">
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
                <Image
                  alt=""
                  width="100"
                  height="100"
                  className="aspect-square w-24 object-cover"
                  src={post.entry.cover_image}
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold sm:line-clamp-1">{post.entry.title}</h2>
                  <p className="text-lg">{formatDateLong(post.entry.date)}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}