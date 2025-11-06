import React from 'react';
import { Link } from 'react-router-dom';

interface Section5Props {
  heading: string;
  content: string;
  images: Array<{
    src: string;
    alt: string;
  }>;
  links: Array<{
    text: string;
    href: string;
  }>;
  id: string;
}

const Section5: React.FC<Section5Props> = ({
  heading,
  content,
  images,
  links,
  id,
}) => {
  return (
    <section id={id} className="bg-brand-6 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-1 mb-6">
              {heading}
            </h2>
            <p className="text-brand-5 text-lg sm:text-xl mb-8">
              {content}
            </p>
            <div className="flex flex-wrap gap-4">
              {links.map((link, index) => (
                link.href.startsWith('http') || link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                  <a
                    key={index}
                    href={link.href}
                    className="btn btn-primary bg-brand-3 hover:bg-brand-4 text-white"
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={link.href}
                    className="btn btn-primary bg-brand-3 hover:bg-brand-4 text-white"
                  >
                    {link.text}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
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

export default Section5;
