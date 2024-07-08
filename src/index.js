import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function HeroStack() {
  return (
    <div className="hero-stack clip-contents">
      <div className="small-container">
        <div className="title-section">
          <div className="pill">
            <p className="we-just-raised-20m-in-ser">
              We just raised $20M in Series B. Learn more
            </p>
          </div>
          <div className="content">
            <p className="modern-analytics-for-th">
              Modern analytics for the modern world
            </p>
            <div className="paragraph-wrapper">
              <p className="lorem-ipsum-dolor-sit-am">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="actions">
            <div className="button">
              <p className="download-the-app">Download the app</p>
            </div>
            <div className="button-1">
              <p className="talk-to-an-expert">Talk to an expert</p>
            </div>
          </div>
        </div>
        <div className="image-wrapper"></div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeroStack />
  </React.StrictMode>
);
