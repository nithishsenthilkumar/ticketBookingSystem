import React from "react";
import logo from "../../assets/logo.png";
import MovieCard from "../../Components/Cards/MovieCard";

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      rating: 4.5,
      description: "Description of Movie 1",
    },
    {
      id: 2,
      title: "Movie 2",
      rating: 3.8,
      description: "Description of Movie 2",
    },
    {
      id: 1,
      title: "Movie 1",
      rating: 4.5,
      description: "Description of Movie 1",
    },
    {
      id: 2,
      title: "Movie 2",
      rating: 3.8,
      description: "Description of Movie 2",
    },
    {
      id: 1,
      title: "Movie 1",
      rating: 4.5,
      description: "Description of Movie 1",
    },
    {
      id: 2,
      title: "Movie 2",
      rating: 3.8,
      description: "Description of Movie 2",
    },
    {
      id: 1,
      title: "Movie 1",
      rating: 4.5,
      description: "Description of Movie 1",
    },
    {
      id: 2,
      title: "Movie 2",
      rating: 3.8,
      description: "Description of Movie 2",
    },
  ];

  return (
    <div className="container-fluid bg-white">
      <div className="fixed w-full grid bg-white justify-items-end">
        <div className="top-0 right-0 w-1/5 p-4 rounded-lg flex items-center pt-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-black p-2 rounded-lg"
          />
          <button className="flex items-center justify-center bg-black text-white rounded-lg p-2 ml-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center px-4 pt-16">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
