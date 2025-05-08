import './Scroll.css';


export default function Scroll() {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <img src="smooothies.png" alt="Smoothie" className="smoothie-image" />
        <div className="text-section">
          <h2>
            Our <span className="highlight">Smoothies That Do More Than Just Taste Good</span> to
          </h2>
          <p>
            At <strong>Slurp</strong>, At Slurpin’ Sage, our smoothies are more than just a tasty treat they’re a powerhouse of nutrition packed into every vibrant blend. 
          Packed with real fruits and wholesome goodness, our smoothies are the perfect blend of flavor and fuel. No additives, no fuss just pure, feel-good sips for any time of day.
          </p>
          <button className="explore-button">Explore Our Menu</button>
        </div>
      </div>
    </div>
  );
}
