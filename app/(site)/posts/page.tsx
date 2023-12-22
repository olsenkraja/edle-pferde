import {reader} from '../../reader'
import Link from "next/link";
import Image from "next/image";

export default async function PostsPage({params}: { params: { slug: string } }) {
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

  let posts = await reader.collections.posts.all()
  posts = posts.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  return (
    <div className="mx-auto max-w-screen-xl my-20">
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`}>
            <li key={post.slug} className="p-8 hover:bg-noble-200">
              <div className="flex space-x-8">
                <Image
                  alt=""
                  width="100"
                  height="100"
                  className="aspect-square w-24 object-cover"
                  src={post.entry.cover_image}
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold line-clamp-1">{post.entry.title}</h2>
                  <p className="text-lg">{formatDate(post.entry.date)}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}