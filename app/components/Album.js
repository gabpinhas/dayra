"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg",
  "/6.jpeg", "/7.jpeg", "/8.jpeg", "/9.jpeg", "/10.jpeg",
  "/11.jpeg", "/12.jpeg", "/13.jpeg", "/14.jpeg", "/15.jpeg",
  "/16.jpeg", "/17.jpeg", "/19.jpeg", "/20.jpeg", "/21.jpeg",
  "/22.jpeg", "/23.jpeg", "/24.jpeg",
];

export default function Album() {
  // Armazena [page, direction] juntos
  const [[page, direction], setPage] = useState([0, 0]);

  // Função para atualizar a página e definir a direção
  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + photos.length) % photos.length, 
      newDirection
    ]);
  };

  // Variantes que usam o valor custom (direção) passado na prop custom
  const variants = {
    enter: (direction) => ({
      opacity: 0.8,
      x: direction > 0 ? 75 : -75,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -75 : 75,
    }),
  };

  return (
    <div className="relative aspect-square w-full overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={page} // Cada mudança de página recria o componente
          src={photos[page]}
          alt="Foto do casal"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl bg-black"
          custom={direction} // Envia a direção usada na animação
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>
      
      {/* Botão esquerdo */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full transition hover:scale-110 hover:bg-black/70"
      >
        <ChevronLeft size={28} />
      </button>
      
      {/* Botão direito */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full transition hover:scale-110 hover:bg-black/70"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === page ? "bg-cyan-500" : "bg-gray-100"}`}
          />
        ))}
      </div>
    </div>
  );
}
