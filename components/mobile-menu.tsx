"use client"

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <Link
    href={href}
    className="hover:bg-noble-700 hover:text-white px-8 py-4 -mx-8"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => setIsOpen(false);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/posts", label: "News" },
    { href: "/horses", label: "Pferde" },
    { href: "/gallery", label: "Galerie" },
    { href: "/about", label: "Über uns" },
  ];

  return (
    <div className="flex flex-col lg:hidden w-full text-gray-900">
      <div className="flex justify-between items-center my-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5"
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" 
            />
          </svg>
        </button>
        <Link href="/" className="hover:bg-noble-700 hover:text-white px-8 py-4 -mx-8" onClick={handleClose}>
          <Image
            alt=""
            width="200"
            height="200"
            className="w-32 absolute z-20 top-0 left-1/2 transform -translate-x-1/2"
            src="/logo.png"
          />
        </Link>
        <div className="w-6" />
      </div>
      <div className={'transition flex-col uppercase font-semibold mb-4 ' + (isOpen ? 'flex' : 'hidden')}>
        {navItems.map(item => (
          <MobileNavLink 
            key={item.href} 
            href={item.href} 
            onClick={handleClose}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </div>
    </div>
  )
}