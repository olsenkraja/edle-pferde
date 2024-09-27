import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";

export default async function HorsesSection() {
  const horses = await reader.collections.horses.all()
  const texts = await reader.singletons.texts.read()

  return (
    <div className="bg-noble-200">
      <div className="relative mx-auto flex max-w-screen-xl px-8 py-24">
        <div className="w-full space-y-12">
          <div className="flex md:w-1/2 flex-col space-y-6">
            <div className="space-y-2">
              <div className="font-semibold uppercase leading-none text-noble-500">Unsere Verkaufspferde</div>
              <h1 className="text-3xl font-semibold uppercase">{texts.homepage_horses_headline}</h1>
            </div>
            <div className="h-1 w-28 bg-noble-500"></div>
            <div>
              {texts.homepage_horses_description}
            </div>
            <div>
              <button
                className="flex items-center justify-center bg-noble-500 text-white px-8 py-4 text-lg font-semibold uppercase leading-none w-fit rounded-full"
              >
                Jetzt entdecken
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {horses.slice(0, 5).map((horse) => (
              <Link href={`/horses/${horse.slug}`} className="bg-white rounded-2xl shadow-xl" key={horse.slug}>
                <div className="relative p-4 pb-0">
                  <Image
                    alt=""
                    width="500"
                    height="500"
                    className="h-[360px] w-full object-cover rounded-xl"
                    src={horse.entry.profile_picture}
                  />
                  {horse.entry.status === 'for-sale' && (
                    <div className="absolute bottom-0 right-4">
                      <span className="bg-red-500 px-2 py-1 text-sm font-semibold uppercase text-white">
                        For Sale
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-4">
                  <span className="text-xl font-semibold">{horse.entry.full_name}</span>
                  <span className="text-gray-500">{horse.entry.full_name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
