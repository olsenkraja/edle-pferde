"use client"

import {Carousel} from "../../../components/carousel";
import type { Metadata } from 'next';

let images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];

export const metadata: Metadata = {
  title: 'Karussell | Edle Pferde',
  description: 'Entdecken Sie unser Karussell mit Bildern, die Edle Pferde zeigen.',
  openGraph: {
    title: 'Karussell | Edle Pferde',
    description: 'Entdecken Sie unser Karussell mit Bildern, die Edle Pferde zeigen.',
    images: '/public/logo.png',
  },
}

export default function Page() {
  return (
    <div className="">
      <Carousel
        images={images}
        className="mx-auto max-w-screen-xl"
      />
    </div>
  );
}
