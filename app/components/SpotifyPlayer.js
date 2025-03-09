"use client";

export default function SpotifyPlayer() {
  return (
    <div className="p-6">
      <p className="mb-4 text-gray-700 font-medium">
        Nossas? acho que só suas mesmo 😝
      </p>
      {/* Contêiner responsivo: 300px para mobile e 600px para telas md+ */}
      <div className="w-[40vh] md:w-[55vh] mx-auto">
        <iframe
          src="https://open.spotify.com/embed/playlist/4ncmqzvpdOVu82D4bhCTZf"
          className="rounded-xl shadow-xl w-full h-[380px]"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
