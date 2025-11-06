import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section4Props {
  heading: string;
  content: string;
  images: string[];
  links: { text: string; href: string }[];
  id: string;
}

const Section4: React.FC<Section4Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section className="bg-brand-6 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="md:order-2">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-1 mb-4 md:mb-6 lg:mb-8">
              {heading}
            </h2>
            <p className="text-brand-5 text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 lg:mb-12">
              {content}
            </p>
            <div className="flex flex-wrap -mx-2 md:-mx-3 lg:-mx-4">
              {links.map((link, index) => (
                <div key={index} className="px-2 md:px-3 lg:px-4 mb-4 md:mb-6 lg:mb-8">
                  <NavLink
                    to={link.href}
                    className="inline-flex items-center px-4 py-2 rounded-md font-medium text-white bg-brand-3 hover:bg-brand-4 focus:outline-none focus:ring-2 focus:ring-brand-3 focus:ring-opacity-50 transition-colors duration-300"
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;