import {reader} from '../../reader'
import Link from "next/link";
import Image from "next/image";

export default async function HorsesPage({params}: { params: { slug: string } }) {
  const horses = await reader.collections.horses.all()

  return (
    <div className="mx-auto max-w-screen-xl my-20">
      <ul>
        {horses.map((horse) => (
          <Link href={`/horses/${horse.slug}`}>
            <li key={horse.slug} className="p-8 hover:bg-noble-200">
              <div className="flex space-x-8">
                <Image
                  alt=""
                  width="500"
                  height="500"
                  className="aspect-square h-40 object-cover"
                  src={horse.entry.profile_picture}
                />
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">{horse.entry.nickname}</h2>
                  <p className="text-lg line-clamp-3">{horse.entry.bio}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}