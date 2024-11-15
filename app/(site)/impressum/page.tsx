import {reader} from "../../reader"
import {MDX} from "../../../components/mdx"
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Edle Pferde',
  description: 'Rechtliche Informationen über Edle Pferde.',
  openGraph: {
    title: 'Impressum | Edle Pferde',
    description: 'Rechtliche Informationen über Edle Pferde.',
    images: '/public/logo.png',
  },
}

export default async function ImpressumPage() {
  const texts = await reader.singletons.texts.read()
  const impressumPage = await texts.impressum_page()

  return (
    <div className="mx-auto max-w-screen-xl my-20 px-8">
      <div className="prose-sm lg:prose w-full !max-w-none">
        <article>
          <MDX source={impressumPage} />
        </article>
      </div>
    </div>
  )
}