import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Section.css';

const Section = ({ title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      let url = '';
      switch (title) {
        case 'Popular':
          url = 'https://zhamal-tv.netlify.app/popular_movies/get_all';
          break;
        case 'Trending':
          url = 'https://zhamal-tv.netlify.app/trending_movies/get_all';
          break;
        case 'Fantasy':
          url = 'https://zhamal-tv.netlify.app/fantasy_movies/get_all';
          break;
        case 'Science Fiction':
          url = 'https://zhamal-tv.netlify.app/science_fiction_movies/get_all';
          break;
        default:
          break;
      }

      try {
        const response = await axios.get(url);
        setMovies(response.data);
        
      } catch (error) {
        setError("Error fetching the movies.");
       
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{title} </p>

     
      <div className="movies-list">
{movies.map(movie => (
   <div className="movie-card" key={movie.id}>
     <img className="movie-image" src={movie.backdropPath} alt={movie.title} /> {/* Film suratini ko'rsatish */}
     <div className="movie-title">{movie.title}</div>
   </div>
 ))}
</div>
    </div>
  );
};

export default Section;