"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  images,
  current,
  onClose,
  onNext,
  onPrev,
}: Props) {

useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Escape":
        onClose();
        break;
      case "ArrowRight":
        onNext();
        break;
      case "ArrowLeft":
        onPrev();
        break;
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose, onNext, onPrev]);

  return (
    <div
  onClick={onClose}
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95"
>

      <button
        onClick={onClose}
        className="absolute right-8 top-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-red-600"
      >
        <X size={28} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-blue-600"
      >
        <ChevronLeft size={30} />
      </button>

      <motion.div
  onClick={(e) => e.stopPropagation()}
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="relative h-[85vh] w-[90vw] max-w-7xl"
>
    </motion.div>

      <button
        onClick={onNext}
        className="absolute right-8 rounded-full bg-white/10 p-3 text-white transition hover:bg-blue-600"
      >
        <ChevronRight size={30} />
      </button>

      <div className="absolute bottom-8 rounded-full bg-white/10 px-5 py-2 text-white">
        Image {current + 1} of {images.length}
      </div>
    </div>
  );
}