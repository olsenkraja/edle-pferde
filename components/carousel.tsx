"use client"

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function Carousel(props) {
  let [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={ { duration: 0.7, ease: [0.32, 0.72, 0, 1] } }>
      <div {...props}>
        <div className="mx-auto flex h-full flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={ { x: `-${ index * 100 }%` } } className="flex">
              { props.images.map((image) => (
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  key={ image }
                  src={ image }
                  className="object-cover min-w-full"
                  alt=""
                />
              )) }
            </motion.div>
            <AnimatePresence initial={ false }>
              { index > 0 && (
                <motion.button
                  initial={ { opacity: 0 } }
                  animate={ { opacity: 0.7 } }
                  exit={ { opacity: 0, pointerEvents: "none" } }
                  whileHover={ { opacity: 1 } }
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={ () => setIndex(index - 1) }
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
              ) }
            </AnimatePresence>

            <AnimatePresence initial={ false }>
              { index + 1 < props.images.length && (
                <motion.button
                  initial={ { opacity: 0 } }
                  animate={ { opacity: 0.7 } }
                  exit={ { opacity: 0, pointerEvents: "none" } }
                  whileHover={ { opacity: 1 } }
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={ () => setIndex(index + 1) }
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              ) }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
