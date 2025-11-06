import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Emily: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="About Emily Kirk - Kirk Estate Planning"
        description="Meet Emily Kirk, estate planning attorney in Missouri and Illinois. Washington University School of Law graduate with years of estate planning experience."
        canonicalUrl="https://kirkestateplanning.com/emily"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Emily Kirk</h1>
            <p className="text-xl text-gray-600">
              Estate Planning Attorney • Missouri & Illinois
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face" 
                alt="Emily Kirk, Estate Planning Attorney" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Background and Qualifications</h2>
                <p className="text-gray-700 mb-4">
                  I grew up in central Illinois and have lived in St. Louis since the early 1990s. 
                  I graduated from the Washington University School of Law in St. Louis and practice 
                  law in Missouri and Illinois.
                </p>
                <p className="text-gray-700 mb-4">
                  I practiced business litigation for several years and also spent a decade working 
                  in higher education. My husband and I enjoy participating in local trivia nights 
                  and spending time with our two children.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Quick Facts</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Education:</strong> Washington University School of Law</div>
                  <div><strong>Licensed in:</strong> Missouri and Illinois</div>
                  <div><strong>Experience:</strong> Hundreds of estate planning clients</div>
                  <div><strong>Background:</strong> Business litigation and higher education</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Estate Planning Expertise</h2>
              <p className="text-gray-700 mb-4">
                I was trained in estate planning by a prestigious, nationally-recognized law firm 
                and found that it was an area of practice that I loved. I have helped hundreds of 
                clients with their wills, trusts, and estate planning needs.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Hundreds of satisfied clients
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">My Focus & Passion</h2>
              <p className="text-gray-700 mb-4">
                I enjoy working with estate planning clients because of the positive outcomes and 
                the peace of mind that clients experience when it's all done. It is the most 
                rewarding work of my career.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                </svg>
                That's why it's all I do
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">My Approach to Estate Planning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Personal Connection</h3>
                <p className="text-gray-600 text-sm">Understanding your unique family situation and goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Expert Care</h3>
                <p className="text-gray-600 text-sm">Professional guidance through every step of the process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Peace of Mind</h3>
                <p className="text-gray-600 text-sm">Ensuring your family is protected and your wishes are clear</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Work Together?</h2>
            <p className="text-gray-600 mb-6">
              Let's discuss your estate planning needs in a free, no-pressure consultation.
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
              <p className="text-gray-500 text-sm mb-2">Learn more about our services:</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/wills" className="link link-hover">Wills</Link>
                <Link to="/trusts" className="link link-hover">Trusts</Link>
                <Link to="/values" className="link link-hover">Our Values</Link>
                <Link to="/reviews" className="link link-hover">Client Reviews</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Emily;