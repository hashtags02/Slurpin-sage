import React from "react";
import "./Menu.css"; // Ensure you have this CSS file for styling

const menuItems = [
  {
    title: "Morning Glory Smoothie",
    desc: "Apple, pineapple, spinach, shredded coconut, chia seeds, cinnamon powder",
    img: "/Menu1.jpg", // Image from public folder
  },
  {
    title: "Cacao Nutty Delight",
    desc: "Banana, cacao powder, peanut butter, milk",
    img: "/Menu2.png",
  },
  {
    title: "Virgin Pina Colada",
    desc: "Pineapple, coconut milk, vanilla extract",
    img: "/Menu3.png",
  },
];

export default function Menu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">
        MENU <span className="arrow">→</span>
      </h1>

      <div className="menu-tabs">
        <span>Bowls</span>
        <span>Shakes</span>
        <span className="active-tab">Smoothies</span>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
