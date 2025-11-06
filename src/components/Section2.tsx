import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section2Props {
  heading: string;
  content: string;
  images: Array<{ src: string; alt: string }>;
  links: Array<{ text: string; href: string }>;
  id: string;
}

const Section2: React.FC<Section2Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="py-16 bg-brand-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-brand-2 mb-4">
              {heading}
            </h2>
            <p className="text-brand-5 leading-relaxed">
              {content}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="btn btn-primary btn-outline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="card shadow-lg rounded-lg overflow-hidden"
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;