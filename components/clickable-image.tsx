'use client'

import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  photos?: readonly string[];
  currentIndex?: number;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  photos?: readonly string[];
  onPrevious: () => void;
  onNext: () => void;
  isTransitioning: boolean;
}

const NavigationButton = ({ 
  direction, 
  onClick, 
  ariaLabel 
}: { 
  direction: 'previous' | 'next'; 
  onClick: () => void; 
  ariaLabel: string;
}) => (
  <button
    onClick={onClick}
    className="pointer-events-auto bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
    aria-label={ariaLabel}
  >
    {direction === 'previous' ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    )}
  </button>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button
    className="bg-white size-8 font-extrabold rounded-full absolute -top-4 -right-4 shadow-2xl border-2 border-black flex items-center justify-center hover:scale-110 transition-transform"
    onClick={onClick}
    aria-label="Close lightbox"
  >
    <span className="text-xl mb-1">&times;</span>
  </button>
);

const Lightbox = ({ 
  isOpen, 
  onClose, 
  src, 
  alt, 
  photos, 
  onPrevious, 
  onNext, 
  isTransitioning 
}: LightboxProps) => (
  <Transition
    show={isOpen}
    as={Fragment}
  >
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      </Transition.Child>
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="mx-auto relative">
            <div className="relative flex items-center justify-center">
              <img 
                src={src} 
                alt={alt} 
                className="max-w-[90vw] max-h-[90vh] transition-opacity duration-200 ease-in-out"
                style={{ 
                  opacity: isTransitioning ? 0 : 1,
                }}
              />
            </div>
            {photos && photos.length > 1 && (
              <div className="fixed inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <NavigationButton 
                  direction="previous" 
                  onClick={onPrevious} 
                  ariaLabel="Previous image" 
                />
                <NavigationButton 
                  direction="next" 
                  onClick={onNext} 
                  ariaLabel="Next image" 
                />
              </div>
            )}
            {alt && (
              <div className="bg-black/50 text-white absolute bottom-0 px-2 py-1 w-full">
                {alt}
              </div>
            )}
            <CloseButton onClick={onClose} />
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
);

export function ClickableImage({
  src,
  alt,
  width = 360,
  height = 360,
  photos,
  ...props
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(src);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchImage = (newPhoto: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhoto(newPhoto);
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrevious = () => {
    if (photos) {
      const currentIndex = photos.indexOf(currentPhoto);
      const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
      switchImage(photos[newIndex]);
    }
  };

  const handleNext = () => {
    if (photos) {
      const currentIndex = photos.indexOf(currentPhoto);
      const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
      switchImage(photos[newIndex]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPhoto]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
        className={props.className}
      />
      <Lightbox 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        src={currentPhoto}
        alt={alt}
        photos={photos}
        onPrevious={handlePrevious}
        onNext={handleNext}
        isTransitioning={isTransitioning}
      />
    </>
  );
}