import "./MovieCard.css";
import vijay from '../assets/vijay.jpg'

function MovieCard() {
  return (
    <div className="movie-card">
      <img
        src={vijay}
        alt="Movie Poster"
        className="movie-poster"
      />

      <div className="movie-content">
        <h2>Leo</h2>
        <p><strong>Hero:</strong> Vijay</p>
        <p><strong>Collection:</strong> ₹620 Crores</p>
      </div>
    </div>
  );
}

export default MovieCard;