import PostsSection from "../../components/homepage/posts-section";
import HorsesSection from "../../components/homepage/horses-section";
import AboutSection from "../../components/homepage/about-section";
import WelcomeSection from "../../components/homepage/welcome-section";
import GallerySection from "../../components/homepage/gallery-section";
import ElementsSection from "../../components/homepage/elements-section";

export default async function Homepage() {
  return (
    <div className="bg-white">

      <WelcomeSection />

      <ElementsSection />

      <PostsSection />

      <HorsesSection />

      <AboutSection />

      <GallerySection />

    </div>
  )
}
