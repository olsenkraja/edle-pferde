import {reader} from '../../app/reader'
import Image from "next/image";
import {DocumentRenderer} from "@keystatic/core/renderer";
import Link from "next/link";

export default async function WelcomeSection() {
  const texts = await reader.singletons.texts.read()
  console.log('texts.about')
  console.log(texts.about)

  return (
    <div className="relative z-10 pt-96 pb-24">
      <div className="absolute inset-0" aria-hidden="true">
        <Image alt="" width="1024" height="1024" className="h-full w-full object-cover"
               src="https://img.freepik.com/free-photo/elegant-horse-silhouette-against-dawn-sky_23-2149367202.jpg?w=2000&t=st=1701443508~exp=1701444108~hmac=27e9e3959dbf43401f2509277b4fdcee15da43b61590807a9935123b2d824006"
        />
      </div>
      <div className="relative z-50 mx-auto flex h-full max-w-screen-xl items-center px-8">
        <div className="lg:w-3/5 space-y-10 text-white">
          <div>
            <div className="text-xl font-bold lg:text-2xl whitespace-nowrap">
              Willkommen beim
            </div>
            <div className="text-3xl font-bold lg:text-6xl whitespace-nowrap">
              Trakehner Gestüt Pichl
            </div>
            <div className="text-2xl font-bold lg:text-4xl whitespace-nowrap">
              Oberösterreich
            </div>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
          <div className="mt-6 text-lg leading-8">
            <div className="text-sm lg:text-base p-4 -m-4 bg-black/50">
              <div className="line-clamp-5">
                <DocumentRenderer document={await texts.about()} />
              </div>
            </div>
          </div>
          <div className="">
            <Link href={`/about`}
                  className="flex items-center justify-center bg-noble-500 px-6 py-3 font-semibold uppercase leading-none text-noble-900 w-fit">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
