import Image from 'next/image'
import Link from "next/link";
import {reader} from "../app/reader";
import MobileMenu from "./mobile-menu";

export async function Header() {
  const contact = await reader.singletons.contact.read()
  return (
    <header className="bg-gradient-to-b from-noble-100 to-noble-200 shadow-2xl top-0 z-50">
      <nav className="mx-auto flex max-w-screen-xl flex-1 items-center justify-between px-8"
           aria-label="Global">
        <div className="hidden flex-1 lg:flex lg:-ml-4">
          <Link
            href="/"
            className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
          >
            Home
          </Link>
          <Link
            href={`/posts`}
            className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
          >
            News
          </Link>
          <Link
            href={`/horses`}
            className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
          >
            Pferde
          </Link>
        </div>
        <Image
          alt=""
          width="200"
          height="200"
          className="hidden lg:block w-48 md:absolute z-20 top-0 left-1/2 transform -translate-x-1/2"
          src="/logo.png"
        />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={`/gallery`}
            className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
          >
            Galerie
          </Link>
          <Link
            href={`/about`}
            className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
          >
            Über uns
          </Link>
            {contact.facebook && (
                <Link
                  href={`https://facebook.com/${contact.facebook}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="currentColor"
                          d="M8 1C4.13 1 1 4.15 1 8.04c0 3.51 2.56 6.43 5.91 6.96v-4.92H5.13V8.04h1.78V6.49c0-1.77 1.05-2.74 2.64-2.74c.77 0 1.57.14 1.57.14v1.73h-.88c-.87 0-1.14.54-1.14 1.1v1.32h1.94l-.31 2.04H9.1V15c3.35-.53 5.91-3.44 5.91-6.96c0-3.89-3.13-7.04-7-7.04Z" />
                  </svg>
                </Link>
            )}

            {contact.instagram && (
                <Link
                  href={`https://instagram.com/${contact.instagram}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition font-semibold uppercase leading-6 text-siam-900 hover:bg-noble-200 px-4 py-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="currentColor"
                          d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" />
                  </svg>
                </Link>
            )}
        </div>
        <MobileMenu />
      </nav>
    </header>
  )
}
