import React from "react";
import img1 from "../assets/imgs/img1.jpg";
import img2 from "../assets/imgs/img2.jpg";
import img3 from "../assets/imgs/img3.jpg";
import img4 from "../assets/imgs/img4.jpg";
import img5 from "../assets/imgs/img5.jpg";
import img6 from "../assets/imgs/img6.jpg";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div className="HeroTextSection">
        <h1>Welcome to Restro – Where Taste Meets Tradition 🍷</h1>
        <p>
          “At Restro, we don’t just serve food — we serve emotions, memories,
          and joy on every plate.”
        </p>
      </div>

      <div className="HeroGallery">
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <div className="HeroImageWrapper" key={index}>
            <img src={img} alt={`Hero ${index + 1}`} className="HeroImage" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
