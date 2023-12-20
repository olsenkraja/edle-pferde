import {reader} from '../../app/reader'
import Image from "next/image";
import {DocumentRenderer} from "@keystatic/core/renderer";
import Link from "next/link";

export default async function WelcomeSection() {
  const aboutPage = await reader.collections.pages.read('about')

  return (
    <div className="relative z-10 py-80">
      <div className="absolute inset-0" aria-hidden="true">
        <Image alt="" width="500" height="500" className="h-full w-full object-cover"
               src="https://img.freepik.com/free-photo/elegant-horse-silhouette-against-dawn-sky_23-2149367202.jpg?w=2000&t=st=1701443508~exp=1701444108~hmac=27e9e3959dbf43401f2509277b4fdcee15da43b61590807a9935123b2d824006"
        />
      </div>
      <div className="relative z-50 mx-auto flex h-full max-w-screen-xl items-center px-8">
        <div className="w-3/5 space-y-10 text-white">
          <span className="text-4xl font-bold sm:text-6xl">Welcome to Trakehner Stud Pichl, Upper Austria</span>
          <div className="h-1 w-28 bg-noble-500"></div>
          <div className="mt-6 text-lg leading-8">
            <div className="line-clamp-5">
              <DocumentRenderer document={await aboutPage.content()} />
            </div>
          </div>
          <div className="">
            <button
              className="flex items-center justify-center bg-noble-500 px-6 py-3 font-semibold uppercase leading-none text-white">Read
                                                                                                                                  More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
