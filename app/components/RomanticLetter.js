"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RomanticLetter() {
    const [showLetter, setShowLetter] = useState(false);

    return (
        <div className="p-6">
            <button
                onClick={() => setShowLetter(!showLetter)}
                className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-colors hover:bg-cyan-600 shadow-md"
            >
                {showLetter ? "Fechar Carta" : "Abrir Carta"}
            </button>
            <AnimatePresence>
                {showLetter && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.65 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                        className="mt-6 p-8 bg-gray-100 rounded-xl shadow-lg text-gray-800 text-lg"
                    >
                        <p className="font-semibold font-sans text-cyan-900">
                            "Meu amor, cada momento com você é um presente para mim.<br />
                            Suas palavras e seu sorriso tornam meus dias especiais.<br />
                            Obrigado por existir e iluminar minha vida. <br />
                            <br />
                            Você trouxe brilho pros meus dias e felicidade pra minha vida. <br />
                            Sempre penso em como sou sortudo de te ter. <br />
                            <br />

                            Você é a princesa dos meus sonhos e mulher da minha vida. <br />
                            Prometo te amar por toda a eternidade, para todo o sempre." <br />

                            

                            
                            <br />
                            Te amo infinitamente !!! 
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
