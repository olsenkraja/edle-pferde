import {reader} from "../../reader";
import {MDX} from "../../../components/mdx";

export default async function AboutPage() {
  const texts = await reader.singletons.texts.read()
  const aboutPage = await texts.about_page()

  return (
    <div className="mx-auto max-w-screen-xl my-20 px-8">
      <div className="prose lg:prose-xl max-w-none">
        <article>
          <MDX source={aboutPage} />
        </article>
      </div>
    </div>
)
}
