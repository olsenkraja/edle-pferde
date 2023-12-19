import Image from 'next/image'
import Link from "next/link";
import {reader} from "../app/reader";

export async function Header() {
  const socialLinks = await reader.singletons.socialLinks.read()
  return (
    <header className="bg-gradient-to-b from-noble-900 to-noble-950 shadow-2xl top-0 z-50">
      <nav className="mx-auto flex max-w-screen-xl flex-1 items-center justify-between px-8 py-10"
           aria-label="Global">
        <div className="hidden flex-1 lg:flex lg:gap-x-12">
          <Link href="/" className="font-semibold uppercase leading-6 text-white">Home</Link>
          <Link href={`/about`} className="font-semibold uppercase leading-6 text-white">Gestüt</Link>
          <Link href="#" className="font-semibold uppercase leading-6 text-white">Pferde</Link>
          <Link href="#" className="font-semibold uppercase leading-6 text-white">Gallery</Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                 aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden flex-1 lg:flex lg:gap-x-12">
          <div className="relative flex justify-center lg:flex-1">
            <Link href="#" className="absolute inset-0 -m-16 flex justify-center p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" width="500" height="500" className="h-36 w-auto z-50"
                     src="https://www.edle-pferde.com/sites/default/files/flagge2.png" />
            </Link>
          </div>
        </div>
        <div className="hidden space-x-8 lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-white">Social Network</Link>
          <ul className="flex space-x-4">
            {socialLinks.facebook && (
              <li>
                <Link
                  href={`https://facebook.com/${socialLinks.facebook}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center space-x-1 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="currentColor"
                          d="M8 1C4.13 1 1 4.15 1 8.04c0 3.51 2.56 6.43 5.91 6.96v-4.92H5.13V8.04h1.78V6.49c0-1.77 1.05-2.74 2.64-2.74c.77 0 1.57.14 1.57.14v1.73h-.88c-.87 0-1.14.54-1.14 1.1v1.32h1.94l-.31 2.04H9.1V15c3.35-.53 5.91-3.44 5.91-6.96c0-3.89-3.13-7.04-7-7.04Z" />
                  </svg>
                  <span className="text-xs">Facebook</span>
                </Link>
              </li>
            )}

            {socialLinks.instagram && (
              <li>
                <Link
                  href={`https://instagram.com/${socialLinks.instagram}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center space-x-1 text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="currentColor"
                          d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" />
                  </svg>
                  <span className="text-xs">Instagram</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div className="hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 z-50"></div>
        <div
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="" width="500" height="500" className="h-8 w-auto"
                     src="https://www.edle-pferde.com/sites/default/files/flagge2.png" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                   aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</Link>
                <Link href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</Link>
                <Link href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</Link>
              </div>
              <div className="py-6">
                <Link href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                                                                                                                      in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
