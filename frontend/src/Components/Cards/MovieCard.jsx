import React from "react";
import side from "../../assets/side.jpg";

const MovieCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden border-2 border-gray-400 m-2 p-2">
      <div className="relative">
        <div className="absolute h-screen inset-0 bg-black opacity-40"></div>
        <img className="w-full rounded-lg" src={side} alt="Movie Poster" />
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold text-xl">Movie Title</div>
          <div className="flex items-center">
            <div className="text-yellow-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="ml-1">4.5</div>
          </div>
        </div>
        <p className="text-gray-700 text-base">
          Brief description about the movie. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Tickets
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Visit Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
