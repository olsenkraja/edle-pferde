import {reader} from '../../app/reader'
import Image from "next/image";
import Link from "next/link";

export default async function AboutSection() {
  const texts = await reader.singletons.texts.read()

  return (
    <div>
      <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-16 px-8 sm:py-36 pt-16 pb-32 lg:flex-row lg:space-x-16">
        <div className="flex sm:space-x-6 space-x-5 lg:w-3/5">
          <div className="h-96">
            <Image alt="" width="500" height="500" className="sm:h-full h-[450px] flex-1 object-cover rounded-lg shadow-2xl sm:-rotate-[5deg]"
                   src="https://www.edle-pferde.com/sites/default/files/2020-02/Gestuet1_0.jpg" />
          </div>
          <div className="mt-16 h-96">
            <Image alt="" width="500" height="500" className="sm:h-full h-[450px] flex-1 object-cover rounded-lg shadow-2xl smrotate-[5deg]"
                   src="https://www.edle-pferde.com/sites/default/files/2020-02/LQKL0944_0.JPG" />
          </div>
        </div>
        <div className="flex flex-1 flex-col space-y-6 lg:w-2/5">
          <div className="space-y-2">
            <div className="font-semibold uppercase leading-none text-noble-500">Über uns</div>
            <h1 className="text-3xl font-semibold uppercase">{texts.homepage_about_headline}</h1>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
          <div>
            {texts.homepage_about_description}
          </div>
          <div>
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
