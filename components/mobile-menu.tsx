"use client"

import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

export default function MobileMenu() {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col lg:hidden w-full text-white">
      <div className="flex justify-between items-center my-8">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
               stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
        <Link href="/" className="hover:bg-noble-700 px-8 py-4 -mx-8" onClick={() => setIsOpen(false)}>
          <Image
            alt=""
            width="200"
            height="200"
            className="w-44 absolute z-20 top-0 left-1/2 transform -translate-x-1/2"
            src="/logo.png"
          />
        </Link>
        <div className="w-6" />
      </div>
      <div className={'transition flex-col uppercase font-semibold text-white mb-4 ' + (isOpen ? 'flex' : 'hidden')}>
        <Link href="/" className="hover:bg-noble-700 px-8 py-4 -mx-8"
              onClick={() => setIsOpen(false)}>Home</Link>
        <Link href={`/about`} className="hover:bg-noble-700 px-8 py-4 -mx-8"
              onClick={() => setIsOpen(false)}>Gestüt</Link>
        <Link href={`/horses`} className="hover:bg-noble-700 px-8 py-4 -mx-8"
              onClick={() => setIsOpen(false)}>Pferde</Link>
        <Link href={`/gallery`} className="hover:bg-noble-700 px-8 py-4 -mx-8"
              onClick={() => setIsOpen(false)}>Gallery</Link>
      </div>
    </div>
  )
}