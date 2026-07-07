import "./HeroBanner.css";
import pic from '../assets/1.avif'

function HeroBanner() {
  return (
    <div className="hero-container">
      <img src={pic} alt="Hero Banner" className="hero-image" />

      <div className="hero-content">
        <h1>Welcome To My Website</h1>
        <button>Explore Now</button>
      </div>
    </div>
  );
}

export default HeroBanner;