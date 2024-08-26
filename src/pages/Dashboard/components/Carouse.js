import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselItems = [
  {
    type: "Certification courses",
    title: "Master the in-demand skills!",
    description: "Get govt.-accredited certification and level-up your resume.",
    buttonText: "Know more",
    color: "#007bff",
    icon: "🎓"
  },
  {
    type: "Certification courses",
    title: "Special offer for students pursuing your degree!",
    description: "Get 55% + 10% OFF on online trainings",
    buttonText: "Know more",
    color: "#17a2b8",
    icon: "💼"
  },
  {
    type: "Campus Competition",
    title: "PepShe Supply Chain",
    description: "For female UG students across India",
    buttonText: "Register now",
    color: "#28a745",
    sponsor: "PEPSICO",
    bulletPoints: [
      "Chance to work for PepsiCo India",
      "Meet & learn from FMCG leaders"
    ]
  }
];

const CarouselCard = ({ item }) => (
  <div className="carousel-card" style={{ backgroundColor: item.color }}>
    <div className="card-content">
      <span className="card-type">{item.type}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.bulletPoints && (
        <ul>
          {item.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      <button>{item.buttonText}</button>
    </div>
    {item.icon && <span className="card-icon">{item.icon}</span>}
    {item.sponsor && <span className="card-sponsor">{item.sponsor}</span>}
  </div>
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2>Trending on Amile 🔥</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <CarouselCard key={index} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;