import {reader} from "../app/reader";
import Link from "next/link";
import {DevicePhoneMobileIcon, EnvelopeIcon, HomeIcon, PhoneIcon} from "@heroicons/react/24/solid";
import { ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <Link href={href} className="hover:underline border-b border-noble-300">
      {children}
    </Link>
  </li>
);

interface ContactItemProps {
  icon: ReactNode;
  children: ReactNode;
}

const ContactItem = ({ icon, children }: ContactItemProps) => (
  <li className="flex items-center space-x-2">
    {icon}
    <span>{children}</span>
  </li>
);

export async function Footer() {
  const currentYear = (new Date()).getFullYear();
  const texts = await reader.singletons.texts.read();
  const contact = await reader.singletons.contact.read();

  const footerLinks = [
    { href: "/about", label: "Über uns" },
    { href: "/impressum", label: "Impressum" },
  ];

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
              <ul className="flex space-x-8 justfy-center md:justify-start order-first md:order-last sm:pb-0 pb-4">
                {footerLinks.map(link => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
            <div className="flex md:w-1/3 flex-col space-y-4">
              <ContactItem icon={<HomeIcon className="size-4 my-1" />}>
                <>
                  Familie Pramendorfer
                  <br/>
                  Pichl 11
                  <br/>
                  A-4716 Hofkirchen an der Trattnach
                </>
              </ContactItem>
              <ul>
                <ContactItem icon={<EnvelopeIcon className="size-4" />}>
                  {contact.email_address}
                </ContactItem>
                <ContactItem icon={<PhoneIcon className="size-4" />}>
                  {contact.phone_number}
                </ContactItem>
                <ContactItem icon={<DevicePhoneMobileIcon className="size-4" />}>
                  {contact.mobile_phone_number}
                </ContactItem>
              </ul>
            </div>
          </div>
          <div className="flex justify-center text-siam-700">
            &copy; {currentYear} Edle Pferde
          </div>
        </div>
      </div>
    </footer>
  );
}
