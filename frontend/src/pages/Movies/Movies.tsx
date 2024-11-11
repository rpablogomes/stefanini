import React, { useState } from "react";
import "./Movies.scss";

interface Movie {
  _id: string;
  name: string;
}

const Movies: React.FC = () => {
  const [movieResearch, setMovieResearch] = useState("");
  const [user, setUser] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const research = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const request = await fetch("http://localhost:5000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movie_research: movieResearch, user }),
      });

      const data = await request.json();

      setMovies(data.docs);
    } catch {
      throw new Error("Failed to research movie");
    }
  };

  return (
    <div className="research-movie">
      <h2>Rikson Pablo's Test - Stefanini - Research Movie</h2>
      <form className="movie-form" onSubmit={research}>
        <div className="form-group">
          <label>Movie</label>
          <input
            className="form-input"
            value={movieResearch}
            onChange={(e) => setMovieResearch(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>User</label>
          <input
            className="form-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <button
          className="submit-button"
          type="submit"
          disabled={!user || !movieResearch ? true : false}
        >
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <div className="movies-list">
          <h2 className="title">Movie List</h2>
          <ul>
            {movies.map((movie) => (
              <li key={movie._id}>
                <div>{movie.name} </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
