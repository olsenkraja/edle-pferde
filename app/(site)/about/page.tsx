import {reader} from "../../reader";
import {DocumentRenderer} from "@keystatic/core/renderer";
import {ShowcaseYouTubeVideo} from "../../../components/showcase-youtube-video";

export default async function AboutPage() {
  const aboutPage = await reader.collections.pages.read('about')

  return (
    <div className="mx-auto max-w-screen-xl my-20 px-8">
      <div className="prose lg:prose-xl w-full">
        <DocumentRenderer
          document={await aboutPage.content()}
          componentBlocks={{
            'youtube-video': (props) => <ShowcaseYouTubeVideo videoId={props.youtubeVideoId} />,
          }}
        />
      </div>
    </div>
  )
}