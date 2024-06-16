import {reader} from '../../app/reader'
import Image from "next/image";
import {DocumentRenderer} from "@keystatic/core/renderer";
import Link from "next/link";

export default async function WelcomeSection() {
  const texts = await reader.singletons.texts.read()

  return (
    <div className="relative z-10 pt-96 pb-24">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          alt=""
          width="1024"
          height="1024"
          className="h-full w-full object-cover"
          src="/header.jpg"
        />
      </div>
      <div className="relative z-50 mx-auto flex h-full max-w-screen-xl items-center px-8">
        <div className="lg:w-3/5 space-y-10 text-white">
          <div>
            <div className="text-xl font-bold lg:text-2xl whitespace-nowrap">
              <span className="drop-shadow-md">Willkommen beim</span>
            </div>
            <div className="text-3xl font-bold lg:text-6xl whitespace-nowrap">
              <span className="drop-shadow-md">Trakehner Gestüt Pichl</span>
            </div>
            <div className="text-2xl font-bold lg:text-4xl whitespace-nowrap">
              <span className="drop-shadow-md">Oberösterreich</span>
            </div>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
          <div className="mt-6 text-lg leading-8">
            <div className="text-sm lg:text-base p-8 bg-black/50">
              <div className="line-clamp-5">
                {texts.homepage_about_text}
              </div>
            </div>
          </div>
          <div className="">
            <Link href={`/about`}
                  className="flex items-center justify-center bg-noble-500 px-6 py-3 font-semibold uppercase leading-none text-noble-900 w-fit">
              Mehr lesen
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
