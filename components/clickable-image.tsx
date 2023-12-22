'use client'

import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from "next/image";

export function ClickableImage(props) {
  let [isOpen, setIsOpen] = useState(false)

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
                <img src={props.src} alt={props.alt} className="max-w-[90vw] max-h-[90vh]" />
                {props.alt
                  ?
                  <div className="bg-black/50 text-white absolute bottom-0 px-2 py-1 w-full">
                    {props.alt}
                  </div>
                  :
                  null
                }
                <button
                  className="bg-white size-8 font-extrabold rounded-full absolute -top-4 -right-4 shadow-2xl border-2 border-black flex items-center justify-center"
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