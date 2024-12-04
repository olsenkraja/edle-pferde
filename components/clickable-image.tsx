'use client'

import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";

export function ClickableImage(props: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  photos?: readonly string[];
  currentIndex?: number;
}) {
  let [isOpen, setIsOpen] = useState(false)
  let [currentPhoto, setCurrentPhoto] = useState(props.src)
  let [isTransitioning, setIsTransitioning] = useState(false)

  const switchImage = (newPhoto: string) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPhoto(newPhoto)
      setIsTransitioning(false)
    }, 200)
  }

  const handlePrevious = () => {
    if (props.photos) {
      const currentIndex = props.photos.indexOf(currentPhoto)
      const newIndex = currentIndex > 0 ? currentIndex - 1 : props.photos.length - 1
      switchImage(props.photos[newIndex])
    }
  }

  const handleNext = () => {
    if (props.photos) {
      const currentIndex = props.photos.indexOf(currentPhoto)
      const newIndex = currentIndex < props.photos.length - 1 ? currentIndex + 1 : 0
      switchImage(props.photos[newIndex])
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentPhoto])

  return (
    <>
      <Image
        {...props}
        width={props.width || 360}
        height={props.height || 360}
        onClick={() => setIsOpen(true)}
        alt={props.alt}
      />
      <Transition
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
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
                    src={currentPhoto} 
                    alt={props.alt} 
                    className="max-w-[90vw] max-h-[90vh] transition-opacity duration-200 ease-in-out"
                    style={{ 
                      opacity: isTransitioning ? 0 : 1,
                    }}
                  />
                </div>
                {props.photos && (
                  <div className="fixed inset-x-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                    <button
                      onClick={handlePrevious}
                      className="pointer-events-auto bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNext}
                      className="pointer-events-auto bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                )}
                {props.alt && (
                  <div className="bg-black/50 text-white absolute bottom-0 px-2 py-1 w-full">
                    {props.alt}
                  </div>
                )}
                <button
                  className="bg-white size-8 font-extrabold rounded-full absolute -top-4 -right-4 shadow-2xl border-2 border-black flex items-center justify-center hover:scale-110 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-xl mb-1">&times;</span>
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}