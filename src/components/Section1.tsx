import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Section1Props {
  heading: string;
  content: string;
  images: string[];
  links: Array<{ text: string; href: string }>;
  id: string;
  businessType: string;
  targetAudience: string;
}

const Section1: React.FC<Section1Props> = ({
  heading,
  content,
  images,
  links,
  id,
  businessType,
  targetAudience,
}) => {
  return (
    <section id={id} className="bg-brand-4 py-12 px-6 sm:px-12 md:py-20 md:px-16 lg:py-24 lg:px-24">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-5 sm:text-4xl md:text-5xl">{heading}</h2>
          <p className="mt-4 text-lg text-brand-6 sm:text-xl md:text-2xl">{content}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-brand-1">Our Services</h3>
              <p className="text-brand-5">Learn more about our comprehensive technology solutions.</p>
              <div className="card-actions justify-end">
                <Link to="/services" className="btn btn-primary">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-brand-1">Meet Our Team</h3>
              <p className="text-brand-5">Get to know our experienced technology professionals.</p>
              <div className="card-actions justify-end">
                <Link to="/team" className="btn btn-primary">
                  View Team
                </Link>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-brand-1">Client Success Stories</h3>
              <p className="text-brand-5">See how we've helped our clients achieve their goals.</p>
              <div className="card-actions justify-end">
                <Link to="/testimonials" className="btn btn-primary">
                  Read Testimonials
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <span className="text-brand-5">We serve:</span>
          <span className="text-brand-1 font-bold">{businessType}</span>
          <span className="text-brand-5">and</span>
          <span className="text-brand-1 font-bold">{targetAudience}</span>
        </div>
      </div>
    </section>
  );
}

export default Section1;