import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activePill, setActivePill] = useState('Nutrition');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const images = [
    { src: 'image-url-1', alt: 'Image 1', title: 'Nutrition', description: 'Description 1' },
    { src: 'image-url-2', alt: 'Image 2', title: 'Physical activity', description: 'Description 2' },
    { src: 'image-url-3', alt: 'Image 3', title: 'Restorative sleep', description: 'Description 3' },
    // Add other images here
  ];

  const imagesColumn1 = ['url1', 'url2', 'url3']; // add image URLs
  const imagesColumn2 = ['url4', 'url5', 'url6'];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setIndex1((prev) => (prev + 1) % imagesColumn1.length);
    }, 3000);

    const interval2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % imagesColumn2.length);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [imagesColumn1.length, imagesColumn2.length]);

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logo.png" alt="ProVital Logo" />
            <span>ProVital</span>
          </div>
          <nav className="nav">
            <ul>
              <li>List your practice</li>
              <li>For Employers</li>
              <li>Courses</li>
              <li>Books</li>
              <li>Speakers</li>
              <li>Doctors</li>
              <li>
                <button className="nav-button">Login/Signup</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Book an appointment with lifestyle medicine experts</h1>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
            <div className="search-bar">
              <input type="text" placeholder="Condition, procedure, specialty..." />
              <input type="text" placeholder="City, state, or zipcode" />
              <button className="search-button">Find Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="container">
          <h2>How It Works</h2>
          <h3>Lifestyle as medicine: The Six Pillars</h3>
          <div className="pills">
            {images.map((image, index) => (
              <button
                key={index}
                className={`pill ${activePill === image.title ? 'active' : ''}`}
                onClick={() => {
                  setActivePill(image.title);
                  setActiveImageIndex(index);
                }}
              >
                {image.title}
              </button>
            ))}
          </div>
          <div className="pillar-content">
            <div className="pillar-image">
              <img src={images[activeImageIndex].src} alt={images[activeImageIndex].alt} />
            </div>
            <div className="pillar-info">
              <h4>{images[activeImageIndex].title}</h4>
              <p>{images[activeImageIndex].description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="image-carousel">
        <div className="container">
          <div className="carousel-column">
            <img src={imagesColumn1[index1]} alt="Column 1" />
          </div>
          <div className="carousel-column">
            <img src={imagesColumn2[index2]} alt="Column 2" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
