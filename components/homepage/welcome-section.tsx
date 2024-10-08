import {reader} from '../../app/reader'
import Image from "next/image"
import Link from "next/link"

export default async function WelcomeSection() {
  const texts = await reader.singletons.texts.read()

  return (
    <div className="relative z-10 pt-96 pb-24">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover"
          src="/header.jpg"
        />
      </div>
      <div className="relative z-50 mx-auto flex h-full max-w-screen-xl items-center px-8">
        <div className="lg:w-3/5 space-y-10 text-white">
          <div className="space-y-1">
            <div className="text-3xl font-extrabold lg:text-5xl whitespace-nowrap text-white">
              <h1 className="drop-shadow-md">Trakehner Gestüt Pichl</h1>
            </div>
            <div className="text-xl font-semibold lg:text-xl whitespace-nowrap text-noble-50">
              <span className="drop-shadow-md">Oberösterreich</span>
            </div>
          </div>
          <div className="">
            <Link
              href={`/about`}
              className="flex items-center justify-center bg-noble-500 text-white px-8 py-4 text-lg font-semibold uppercase leading-none w-fit rounded-full"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
