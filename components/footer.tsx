import { reader } from "../app/reader";
import Link from "next/link";
import { DevicePhoneMobileIcon, EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export async function Footer() {
  const currentYear = (new Date()).getFullYear()
  const texts = await reader.singletons.texts.read()
  const contact = await reader.singletons.contact.read()

  return (
    <footer>
      <div className="bg-gradient-to-br bg-noble-200">
        <div className="relative mx-auto flex max-w-screen-xl flex-col space-y-12 px-8 pb-12">
          <div className="flex justify-center">
            <img className="h-32 w-auto -mt-16 drop-shadow-xl" src="/logo.png" alt="" />
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-16 md:space-y-0 md:space-x-16">
            <div className="md:w-2/3 space-y-4 flex flex-col">
              <div className="flex-1 space-y-2 order-last md:order-first">
                {texts.footer}
              </div>
              <ul className="flex space-x-8 justfy-center md:justify-start order-first md:order-last">
                <li><Link href={`/about`} className="hover:underline">Über uns</Link></li>
                <li><Link href={`/impressum`} className="hover:underline">Impressum</Link></li>
              </ul>
            </div>
            <div className="flex md:w-1/3 flex-col space-y-4">
              <li className="flex space-x-2">
                <HomeIcon className="size-4 my-1" />
                <pre className="font-sans">{contact.address}</pre>
              </li>
              <ul>
                <li className="flex items-center space-x-2">
                  <EnvelopeIcon className="size-4" />
                  <span>{contact.email_address}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <PhoneIcon className="size-4" />
                  <span>{contact.phone_number}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <DevicePhoneMobileIcon className="size-4" />
                  <span>{contact.mobile_phone_number}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center text-green-700">
            &copy; {currentYear} Edle Pferde
          </div>
        </div>
      </div>
    </footer>
  )
}
