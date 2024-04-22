import {reader} from '../../reader'
import Link from "next/link";
import Image from "next/image";

export default async function HorsesPage({params}: { params: { slug: string } }) {
  const horses = await reader.collections.horses.all()

  return (
    <div className="mx-auto max-w-screen-xl my-20">
      <ul>
        {horses.map((horse) => (
          <Link href={`/horses/${horse.slug}`} key={horse.slug}>
            <li key={horse.slug} className="p-8 hover:bg-noble-200 transition">
              <div className="flex space-x-8">
                <Image
                  alt=""
                  width="500"
                  height="500"
                  className="aspect-square h-40 object-cover"
                  src={horse.entry.profile_picture}
                />
                <div className="space-y-4">
                  <div className="flex flex-wrap">
                    <h2 className="mr-4 space-x-4">
                      <span className="text-2xl font-bold">
                        {horse.entry.full_name}
                      </span>
                      <span>
                        ({horse.entry.birth_year})
                      </span>
                    </h2>
                    {horse.entry.status === 'for-sale' && (
                      <span className="bg-red-500 px-2 py-1 text-sm font-semibold uppercase text-white">
                        For Sale
                      </span>
                    )}
                  </div>
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