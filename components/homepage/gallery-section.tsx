import {ClickableImage} from "../clickable-image";
import {reader} from "../../app/reader";
import {formatDateShort} from "../../composables/formatting";

export default async function GallerySection() {
  const texts = await reader.singletons.texts.read()
  let albums = await reader.collections.albums.all()
  albums = albums.sort((a,b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  let photos = []
  albums.forEach(album => {
    album.entry.photos.forEach(photo => {
      photos.push({
        alt: album.slug + ' ' + '(' + formatDateShort(album.entry.date) + ')',
        src: photo
      })
    })
  })

  photos = photos.slice(0, 14)

  return (
    <div>
      <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-16 px-8 py-28">
        <div className="flex md:w-1/2 flex-col space-y-6">
          <div className="space-y-2">
            <div className="font-semibold uppercase leading-none text-noble-500">Gallery</div>
            <div className="text-3xl font-semibold uppercase">{texts.homepage_gallery_headline}</div>
          </div>
          <div className="h-1 w-28 bg-noble-500"></div>
          <div>
            {texts.homepage_gallery_description}
          </div>
        </div>
        <div
          className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {photos.map((photo) => (
            <ClickableImage alt={photo.alt} src={photo.src}
                            className="transition cursor-pointer shadow-lg hover:scale-110" />
          ))}
        </div>
      </div>
    </div>
  )
}
