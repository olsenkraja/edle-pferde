import Image from 'next/image'
import PostsSection from "../../components/homepage/posts-section";
import HorsesSection from "../../components/homepage/horses-section";

export default async function Homepage() {
  return (
    <div className="bg-white">

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
            <p className="mt-6 text-lg leading-8">Our farm is located in the heart of the Hausruckviertel, 30 kilometers
                                                  from the border with Bavaria. Since 2006, we have been striving to
                                                  breed perfect partners for sport and leisure with our small but fine
                                                  Trakehner breed.</p>
            <div className="">
              <button
                className="flex items-center justify-center bg-noble-500 px-6 py-3 font-semibold uppercase leading-none text-white">Read
                                                                                                                                    More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-noble-200">
        <div className="relative mx-auto flex max-w-screen-xl divide-x divide-gray-800/20 px-8 py-8">
          <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </span>
            <span className="uppercase">Horses</span>
          </div>
          <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </span>
            <span className="uppercase">Horses</span>
          </div>
          <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </span>
            <span className="uppercase">Horses</span>
          </div>
          <div className="relative flex h-52 flex-1 flex-col items-center justify-center space-y-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" className="h-12 w-12">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </span>
            <span className="uppercase">Horses</span>
          </div>
        </div>
      </div>

        <PostsSection />

      <HorsesSection />

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
              <div className="text-4xl font-bold uppercase leading-tight">Welcome to the Trakehner Gestüt Pichl in Upper
                                                                          Austria!
              </div>
            </div>
            <div>Our farm is located in the heart of the Hausruckviertel, 30 kilometers from the border with Bavaria.
                 Since 2006, we have been striving to breed perfect partners for sport and leisure with our small but
                 fine Trakehner breed.
            </div>
            <div>
              <button
                className="flex items-center justify-center bg-noble-900 px-6 py-3 font-semibold uppercase leading-none text-white">Read
                                                                                                                                    More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-noble-25">
        <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-16 px-8 py-28">
          <div className="flex w-1/2 flex-col space-y-6">
            <div className="text-3xl font-semibold uppercase">Meet Our Magnificent Horses</div>
            <div className="h-1 w-28 bg-noble-500"></div>
            <div>Welcome to our horse haven, where you can explore the stories of our active horses, reminisce about
                 past companions, and find exceptional horses for sale.
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex">
              <button
                className="flex items-center justify-center bg-noble-900 px-6 py-3 font-semibold leading-none text-white">Active
                                                                                                                          Horses
              </button>
              <button className="flex items-center justify-center px-6 py-3 font-semibold leading-none">Horses for
                                                                                                        sale
              </button>
              <button className="flex items-center justify-center px-6 py-3 font-semibold leading-none">Former Horses
              </button>
            </div>
            <div
              className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/2.JPG" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2020-02/DSC_0772.JPG" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/3.JPG" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/7.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/32.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/5.JPG" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/11.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/14.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/19.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/28.JPG" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-04/gingerstand.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2019-04/goldwyn018.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2019-04/merelyn98.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2018-07/26.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2019-07/1945-2-3455_x.jpg" />
              <Image alt="" width="500" height="500"
                     src="https://www.edle-pferde.com/sites/default/files/2020-02/Gestuet1_0.jpg" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
