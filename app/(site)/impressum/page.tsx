import {reader} from "../../reader";
import {DocumentRenderer} from "@keystatic/core/renderer";
import {ShowcaseYouTubeVideo} from "../../../components/showcase-youtube-video";

export default async function ImpressumPage() {
  const texts = await reader.singletons.texts.read()

  return (
    <div className="mx-auto max-w-screen-xl my-20 px-8">
      <div className="prose-sm lg:prose w-full !max-w-none">
        <DocumentRenderer
          document={await texts.impressum()}
          componentBlocks={{
            'youtube-video': (props) => <ShowcaseYouTubeVideo videoId={props.youtubeVideoId} />,
          }}
        />
      </div>
    </div>
  )
}