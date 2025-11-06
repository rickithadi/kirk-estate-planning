import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Consultation: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="Free Consultation - Kirk Estate Planning"
        description="Start planning your estate with a free initial consultation with Emily Kirk. Remote and in-person consultations available."
        canonicalUrl="https://kirkestateplanning.com/consultation"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Initial Consultation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Start planning your estate with a free initial consultation with Emily
            </p>
            <div className="badge badge-success badge-lg">Free of Charge</div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=300&fit=crop" 
                alt="Estate planning consultation meeting" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
              <p className="text-gray-700 mb-6">
                You don't need to prepare or bring anything. We'll have a conversation to discuss your needs, 
                answer questions, and help you establish your estate planning goals.
              </p>
              <p className="text-gray-700 mb-6">
                We offer remote and in-person consultations to accommodate your schedule and preferences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>No preparation required</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Remote and in-person options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Free of charge</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Schedule Your Free Consultation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Contact Emily Directly</h3>
                <p className="text-gray-600 mb-4">Call or text to schedule your consultation</p>
                <a 
                  href="tel:3142662649" 
                  className="btn btn-primary btn-lg"
                >
                  (314) 266-2649
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Office Information</h3>
                <p className="text-gray-600">
                  168 N Meramec Ave Suite 150<br />
                  Clayton, MO 63105
                </p>
                <p className="text-gray-600 mt-2">
                  <strong>Hours:</strong> 9:00 AM – 6:00 PM<br />
                  <em>Flexible scheduling available</em>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              After your consultation, Emily will recommend the best estate planning solution for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/wills" className="btn btn-outline">
                Learn About Wills
              </Link>
              <Link to="/trusts" className="btn btn-outline">
                Learn About Trusts
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Consultation;