import {reader} from '../../app/reader'
import Image from "next/image"
import Link from "next/link"

export default async function WelcomeSection() {
  const texts = await reader.singletons.texts.read()

  return (
    <div className="relative min-h-[750px]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full object-cover min-h-48"
          src="/images/willi.png"
        />
      </div>
      <div className="absolute lg:left-1/2 z-50 mx-auto flex h-full max-w-screen-xl items-center px-8">
        <div className="lg:w-3/5 space-y-10 text-white">
          <div className="space-y-4">
            <div className="font-extrabold whitespace-nowrap text-white">
              <span className="drop-shadow-md marcellus-font text-7xl text-balance">Trakehner Gestüt Pichl</span>
            </div>
            <div className="whitespace-nowrap text-noble-50">
              <span className="drop-shadow-md uppercase font-semibold tracking-widest">Oberösterreich</span>
            </div>
          </div>
          <div className="">
            <Link
              href={`/about`}
              className="flex items-center justify-center bg-white text-zuccini-900 px-12 py-6 font-semibold uppercase leading-none w-fit rounded-full"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
