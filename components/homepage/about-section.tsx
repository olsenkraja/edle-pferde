import {reader} from '../../app/reader'
import Image from "next/image";
import {DocumentRenderer} from "@keystatic/core/renderer";
import Link from "next/link";

export default async function AboutSection() {
  const aboutPage = await reader.collections.pages.read('about')

  return (
    <div className="bg-noble-25">
      <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-16 px-8 py-36 lg:flex-row lg:space-x-16">
        <div className="flex space-x-6 lg:w-3/5">
          <div className="h-96">
            <Image alt="" width="500" height="500" className="h-full flex-1 object-cover"
                   src="https://www.edle-pferde.com/sites/default/files/2020-02/Gestuet1_0.jpg" />
          </div>
          <div className="mt-16 h-96">
            <Image alt="" width="500" height="500" className="h-full flex-1 object-cover"
                   src="https://www.edle-pferde.com/sites/default/files/2020-02/LQKL0944_0.JPG" />
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-6 lg:w-2/5">
          <div className="flex flex-col space-y-3">
            <div className="font-bold uppercase">About Us</div>
            <div className="text-4xl font-bold uppercase leading-tight">
              Welcome to the Trakehner Gestüt Pichl in Upper Austria!
            </div>
          </div>
          <div className="line-clamp-5">
            <DocumentRenderer document={await aboutPage.content()} />
          </div>
          <div>
            <Link
              href={`/about`}
              className="bg-noble-900 px-6 py-3 font-semibold uppercase leading-none text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
