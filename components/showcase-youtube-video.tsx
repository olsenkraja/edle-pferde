type ShowcaseYouTubeVideoProps = {
  videoId: String
}

export function ShowcaseYouTubeVideo({ videoId }: ShowcaseYouTubeVideoProps) {
  return (
    <iframe
      width="640"
      height="480"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      className="w-full h-[480px] my-8"
    />
  )
}
