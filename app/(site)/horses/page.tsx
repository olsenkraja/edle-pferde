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
                  width="500"
                  height="500"
                  className="aspect-square size-40 object-cover"
                  src={horse.entry.profile_picture}
                  alt={horse.entry.profile_picture_alt_text}
                />
                <div className="space-y-4">
                  <div className="flex flex-wrap">
                    <div>
                      <div className="flex items-center">
                        <h2 className="mr-4 space-x-4">
                          <span className="text-2xl font-bold">
                            {horse.entry.full_name}
                          </span>
                        </h2>
                        {horse.entry.status === 'for-sale' && (
                          <span
                            className="bg-red-500 text-red-100 px-2 py-1 text-xs font-semibold uppercase shadow rounded-full">
                            For Sale
                          </span>
                        )}
                      </div>
                      <h3 className="text-gray-500">
                        geb. {horse.entry.birth_year}
                        {
                          horse.entry.father.value
                            ? ', ' + horse.entry.father.value
                            : ''
                        }
                        {
                          horse.entry.father.value && horse.entry.mothers_father.value
                            ? '-' + horse.entry.mothers_father.value
                            : ''
                        }
                      </h3>
                    </div>
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