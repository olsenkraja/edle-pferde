"use client"

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  className?: string;
}

const CarouselButton = ({ 
  direction, 
  onClick, 
  children 
}: { 
  direction: 'left' | 'right';
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.7 }}
    exit={{ opacity: 0, pointerEvents: "none" }}
    whileHover={{ opacity: 1 }}
    className={`absolute ${direction === 'left' ? 'left-2' : 'right-2'} top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export function Carousel({ images, ...props }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const handlePrevious = () => setIndex(index - 1);
  const handleNext = () => setIndex(index + 1);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div {...props}>
        <div className="mx-auto flex h-full flex-col justify-center">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image) => (
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  key={image}
                  src={image}
                  className="object-cover min-w-full"
                  alt=""
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <CarouselButton direction="left" onClick={handlePrevious}>
                  <ChevronLeftIcon className="h-6 w-6" />
                </CarouselButton>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <CarouselButton direction="right" onClick={handleNext}>
                  <ChevronRightIcon className="h-6 w-6" />
                </CarouselButton>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
