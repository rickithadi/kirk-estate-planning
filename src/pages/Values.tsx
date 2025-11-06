import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Values: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="Our Values - Kirk Estate Planning"
        description="Kirk Estate Planning values: expertise, care, personal connection, and peace of mind for Missouri and Illinois families."
        canonicalUrl="https://kirkestateplanning.com/values"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
            <p className="text-xl text-gray-600">
              Estate planning with expertise, care, and a personal connection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=400&fit=crop" 
                alt="Professional estate planning consultation" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Kirk Estate Planning?</h2>
              <p className="text-gray-700 mb-6">
                At Kirk Estate Planning, we believe that effective estate planning goes beyond just legal documents. 
                It's about understanding your family, your goals, and your concerns to create a plan that truly 
                protects what matters most to you.
              </p>
              <p className="text-gray-700">
                Emily Kirk brings not only legal expertise but also a genuine commitment to helping families 
                achieve peace of mind through thoughtful, comprehensive estate planning.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Trained by prestigious law firms with experience helping hundreds of clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Care</h3>
              <p className="text-gray-600">
                Thoughtful attention to every detail of your estate planning needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Connection</h3>
              <p className="text-gray-600">
                Understanding your family's unique circumstances and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
              <p className="text-gray-600">
                Ensuring your family is protected and your wishes are honored
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Dedicated Focus
                </h3>
                <p className="text-gray-700">
                  Estate planning is the most rewarding work of Emily's career. That's why it's all she does - 
                  providing focused expertise and attention to each client.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Family Understanding
                </h3>
                <p className="text-gray-700">
                  Emily has her own family and understands the importance of protecting your estate 
                  for the people you care about most.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  No Pressure Approach
                </h3>
                <p className="text-gray-700">
                  We believe in education and guidance, not high-pressure sales. You'll never feel 
                  rushed into decisions about your family's future.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Proven Results
                </h3>
                <p className="text-gray-700">
                  Hundreds of satisfied clients across Missouri and Illinois have experienced 
                  the peace of mind that comes from proper estate planning.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Our Promise to You</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "I enjoy working with estate planning clients because of the positive outcomes and 
                the peace of mind that clients experience when it's all done. It is the most rewarding 
                work of my career."
              </p>
              <p className="text-gray-600 font-medium">- Emily Kirk</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Experience Our Values Firsthand</h2>
            <p className="text-gray-600 mb-6">
              Start with a free consultation and discover how our approach can bring peace of mind to your family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/consultation" className="btn btn-primary btn-lg">
                Schedule Free Consultation
              </Link>
              <a href="tel:3142662649" className="btn btn-outline btn-lg">
                Call (314) 266-2649
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-sm mb-2">Learn more:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/emily" className="link link-hover">About Emily</Link>
                <Link to="/reviews" className="link link-hover">Client Reviews</Link>
                <Link to="/wills" className="link link-hover">Will Package</Link>
                <Link to="/trusts" className="link link-hover">Trust Package</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Values;