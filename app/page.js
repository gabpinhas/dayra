"use client";
import Timer from "./components/Timer";
import Album from "./components/Album";
import RomanticLetter from "./components/RomanticLetter";
import SpotifyPlayer from "./components/SpotifyPlayer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-600 to-black flex flex-col items-center p-6 text-center space-y-12">
      {/* Cabeçalho */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 p-10"
      >
        <h1 className="text-5xl font-bold text-white mb-4">Para Minha Vidinha 💖</h1>
        <img
          src="/picture.jpeg"
          alt="Minha Namorada"
          className="w-56 h-56 mt-16 rounded-full border-4 border-white shadow-2xl mx-auto"
        />
      </motion.header>

      {/* Timer */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-white rounded-3xl p-8 shadow-2xl max-w-3xl w-full"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Estamos juntos há 💘:</h2>
        <Timer startDate="2022-09-27T00:00:00" />
      </motion.section>

      {/* Álbum de Fotos */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-gray-100 rounded-3xl p-10 shadow-2xl max-w-3xl w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nosso Álbum de Fotos 📸💖</h2>
        <Album />
      </motion.section>

      {/* Carta Romântica */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="bg-white rounded-3xl p-10 shadow-2xl max-w-3xl w-full"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Minha Carta para Você 💌</h2>
        <RomanticLetter />
      </motion.section>

      {/* Spotify Player */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="bg-gray-100 rounded-3xl p-10 shadow-2xl max-w-3xl w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossas Músicas Favoritas 🎶💓</h2>
        <SpotifyPlayer />
      </motion.section>
    </div>
  );
}
