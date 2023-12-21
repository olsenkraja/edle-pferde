import {reader} from "../../reader";
import {ClickableImage} from "../../../components/clickable-image";

export default async function AboutPage() {
  let albums = await reader.collections.albums.all()
  albums = albums.sort((a,b) => (a.entry.date < b.entry.date) ? 1 : ((b.entry.date < a.entry.date) ? -1 : 0))

  function formatDate(input: string | number | Date) {
    const date = new Date(input);
    const germanDate = new Intl.DateTimeFormat('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    });

    return germanDate.format(date);
  }

  return (
    <div className="mx-auto max-w-screen-xl my-20 px-8 space-y-16">
      {albums.map((album) => (
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <h2 className="text-2xl font-semibold">{album.slug}</h2>
            <span className="text-sm opacity-50">{formatDate(album.entry.date)}</span>
          </div>
          <div className="grid grid-cols-6 gap-2">
            {album.entry.photos.map(photo => (
              <ClickableImage
                alt=""
                src={photo}
                className="transition cursor-pointer shadow-lg hover:scale-110 aspect-square object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
