'use client'

import {useState} from 'react'
import {Dialog} from '@headlessui/react'

export function ClickableImage(props) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <img
        {...props}
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
        alt={props.alt}
      />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
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
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}