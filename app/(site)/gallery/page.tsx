import { reader } from "../../reader";
import { ClickableImage } from "../../../components/clickable-image";
import { formatDateLong } from "../../../composables/formatting";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie | Edle Pferde',
  description: 'Durchstöbern Sie unsere Galerie schöner Pferde und Veranstaltungen.',
  openGraph: {
    title: 'Galerie | Edle Pferde',
    description: 'Durchstöbern Sie unsere Galerie schöner Pferde und Veranstaltungen.',
    images: '/public/logo.png',
  },
}

export default async function GalleryPage() {
  let albums = await reader.collections.albums.all();
  albums = albums.sort((a, b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0));

  return (
    <div className="mx-auto max-w-screen-xl my-20 space-y-16">
      {albums.map((album) => (
        <div className="space-y-8" key={album.slug}>
          <div className="flex flex-col md:flex-row justify-between md:items-end px-8 md:space-y-0 space-y-4">
            <h2 className="text-2xl font-semibold">{album.slug}</h2>
            <span className="text-sm opacity-50">{formatDateLong(album.entry.date)}</span>
          </div>
          <div className="md:grid md:grid-cols-6 flex space-x-4 md:space-x-0 overflow-x-scroll md:overflow-x-auto gap-2 px-8 snap-x snap-mandatory md:overflow-hidden">
            {album.entry.photos.map((photo, index) => (
              <ClickableImage
                key={photo}
                alt=""
                src={photo}
                photos={album.entry.photos}
                currentIndex={index}
                className="transition cursor-pointer shadow-lg md:hover:scale-110 aspect-square object-cover snap-center"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
