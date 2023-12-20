import Image from "next/image";

export default async function GallerySection() {
  return (
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
  )
}
