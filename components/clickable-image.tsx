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
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
            <img src={props.src} alt={props.alt} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}