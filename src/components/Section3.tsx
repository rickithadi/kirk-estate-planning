import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section3Props {
  heading: string;
  content: string;
  images: Array<{ src: string; alt: string }>;
  links: Array<{ text: string; href: string }>;
  id: string;
}

const Section3: React.FC<Section3Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="bg-brand-6 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-1 mb-4 sm:mb-6">
              {heading}
            </h2>
            <p className="text-brand-5 text-lg sm:text-xl mb-6 sm:mb-8">
              {content}
            </p>
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="btn btn-primary btn-sm lg:btn-md"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;