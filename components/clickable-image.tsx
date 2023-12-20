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


// import {useState} from "react";
//
// const transition = {
//   type: "tween",
//   damping: 25,
//   stiffness: 120
// };
//
// export function ClickableImage(props) {
//   const [isOpen, setOpen] = useState(false);
//
//   function zoom(e) {
//     console.log('zoom')
//     console.log(e)
//   }
//
//
//   return (
//     <div>
//       <motion.div
//         animate={
//           {
//             opacity: isOpen ? 0.5 : 0,
//             zIndex: isOpen ? 50 : 0
//           }
//         }
//         transition={transition}
//         className="bg-black w-full h-full fixed inset-0 -z-10"
//         onClick={() => setOpen(false)}
//       />
//       <motion.img
//         {...props}
//         animate={
//           {
//             scale: isOpen ? 2 : 1
//           }
//         }
//         className="cursor-pointer z-50 absolute !w-fit"
//         onClick={() => setOpen(!isOpen)}
//         transition={transition}
//       />
//     </div>
//   )
// }
