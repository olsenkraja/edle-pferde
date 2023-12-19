import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";

export default async function HorsesSection() {
  const horses = await reader.collections.horses.all()

  return (
    <div className="bg-noble-200">
      <div className="relative mx-auto flex max-w-screen-xl px-8 py-24">
        <div className="w-full space-y-12">
          <div className="flex w-1/2 flex-col space-y-6">
            <div className="space-y-2">
              <div className="font-semibold uppercase leading-none text-noble-500">Horses Gallery</div>
              <div className="text-3xl font-semibold uppercase">Meet Our Magnificent Horses</div>
            </div>
            <div className="h-1 w-28 bg-noble-500"></div>
            <div>Welcome to our horse haven, where you can explore the stories of our active horses, reminisce about
                 past companions, and find exceptional horses for sale.
            </div>
            <div>
              <button
                className="flex items-center justify-center bg-noble-900 px-6 py-3 font-semibold uppercase leading-none text-white">
                Explore our horses
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {horses.slice(0, 5).map((horse) => (
              <Link href={`/horses/${horse.slug}`} className="bg-white" key={horse.slug}>
                <div className="relative p-4 pb-0">
                  <Image
                    alt=""
                    width="500"
                    height="500"
                    className="h-64 w-full object-cover"
                    src={horse.entry.profile_picture}
                  />
                  <div className="absolute bottom-0 right-4">
                    <span className="bg-red-500 px-2 py-1 text-sm font-semibold uppercase text-white">
                      For Sale
                    </span>
                  </div>
                </div>
                <div className="flex flex-col p-4">
                  <span className="text-xl font-semibold">{horse.entry.nickname}</span>
                  <span className="text-gray-500">{horse.entry.nickname}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
