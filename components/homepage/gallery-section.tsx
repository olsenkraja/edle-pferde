import {ClickableImage} from "../clickable-image";
import {reader} from "../../app/reader";

export default async function GallerySection() {
  const albums = await reader.collections.albums.all()
  let photos = []
  albums.forEach(album => {
    console.log(album.entry)
    album.entry.photos.forEach(photo => {
      photos.unshift({
        alt: album.slug + ' ' + '(' + (album.entry.date).split('-').reverse().join('.') + ')',
        src: photo
      })
    })
  })

  return (
    <div className="bg-noble-25">
      <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-16 px-8 py-28">
        <div className="flex w-1/2 flex-col space-y-6">
          <div className="text-3xl font-semibold uppercase">Meet Our Magnificent Horses</div>
          <div className="h-1 w-28 bg-noble-500"></div>
          <div>
            Welcome to our horse haven, where you can explore the stories of our active horses, reminisce about past
            companions, and find exceptional horses for sale.
          </div>
        </div>
        <div
          className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {photos.map((photo) => (
            <ClickableImage alt={photo.alt} src={photo.src} className="transition cursor-pointer shadow-lg hover:scale-110" />
          ))}
        </div>
      </div>
    </div>
  )
}
