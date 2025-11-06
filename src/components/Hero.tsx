import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeroProps {
  heading: string;
  subheading: string;
  fullText: string;
  cta: Array<{
    html: string;
    links: Array<{ text: string; href: string }>;
  }>;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  subheading,
  fullText,
  cta,
  backgroundImage,
}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
          <p className="mb-5 text-2xl">{subheading}</p>
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <p>{fullText}</p>
              <div className="card-actions justify-end">
                {cta[0]?.links?.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="btn btn-primary"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;