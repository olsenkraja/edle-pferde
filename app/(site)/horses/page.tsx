import {reader} from '../../reader'
import Link from "next/link";

export default async function HorsesPage({params}: { params: { slug: string } }) {
  const horses = await reader.collections.horses.all()
  return (
    <div>

      <ul>
        {horses.map((horse) => (
          <li key={horse.slug} className="py-4 hover:underline">
            <Link href={`/horses/${horse.slug}`}>
              <div className="h-1 w-12 bg-white"></div>
              <div className="text-xl">{horse.entry.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}