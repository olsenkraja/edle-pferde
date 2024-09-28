import PostsSection from "../../components/homepage/posts-section";
import HorsesSection from "../../components/homepage/horses-section";
import AboutSection from "../../components/homepage/about-section";
import WelcomeSection from "../../components/homepage/welcome-section";
import ElementsSection from "../../components/homepage/elements-section";

export default async function Homepage() {
  return (
    <div className="bg-white">
      <WelcomeSection />
      <ElementsSection />
      <PostsSection />
      <HorsesSection />
      <AboutSection />
    </div>
  )
}

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Edle Pferde',
  description: 'Trakehner Gestüt Pichl',
  openGraph: {
    title: 'Edle Pferde',
    description: 'Trakehner Gestüt Pichl',
    images: '/public/logo.png',
  }
}