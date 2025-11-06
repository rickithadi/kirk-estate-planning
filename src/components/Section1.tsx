import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section1Props {
  heading: string;
  content: string;
  images: any[];
  links: { text: string; href: string }[];
  id: string;
}

const Section1: React.FC<Section1Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section className="hero bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">{content}</p>
          <div className="card-actions">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="btn btn-primary btn-wide normal-case"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {images.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="card card-compact shadow-xl">
                  <figure>
                    <img src={image.src} alt={image.alt} />
                  </figure>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Section1;