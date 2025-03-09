"use client";

export default function SpotifyPlayer() {
  return (
    <div className="p-6">
      <p className="mb-4 text-gray-700 font-medium">Nossas? acho que só suas mesmo 😝</p>
      <iframe
        src="https://open.spotify.com/embed/playlist/4ncmqzvpdOVu82D4bhCTZf"
        width="100%"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        className="rounded-xl shadow-xl"
      ></iframe>
    </div>
  );
}
