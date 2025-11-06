import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Trusts: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="Trust Package - Kirk Estate Planning"
        description="Revocable Trust accomplishes everything a will does, with the significant advantage of avoiding the probate process."
        canonicalUrl="https://kirkestateplanning.com/trusts"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trust Package</h1>
            <p className="text-xl text-gray-600">
              Advanced estate planning with a Revocable Trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop" 
                alt="Trust and estate planning documents" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What Is a Revocable Trust?</h2>
              <p className="text-gray-700 mb-6">
                A Revocable Trust accomplishes everything that a will does, but with the significant advantage 
                of avoiding the probate process.
              </p>
              <p className="text-gray-700 mb-6">
                "Revocable" means that you retain control over your finances, possessions, and wishes. 
                At any time during your life, you can change or even revoke your Revocable Trust.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-green-800">Trust Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Avoids probate court process</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Maintains privacy (not public record)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Faster distribution to beneficiaries</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Reduces court costs and fees</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>You retain full control during lifetime</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span>Can be modified or revoked anytime</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-800">Trust vs. Will</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-700">Privacy</h4>
                  <p className="text-sm text-gray-600">Trust remains private, while will becomes public record</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Speed</h4>
                  <p className="text-sm text-gray-600">Trust avoids lengthy probate process</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Costs</h4>
                  <p className="text-sm text-gray-600">Trust eliminates probate court fees and delays</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Control</h4>
                  <p className="text-sm text-gray-600">Both allow you to maintain control during your lifetime</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Trust Package Includes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Revocable Trust Document</h3>
                <p className="text-gray-600 text-sm">Comprehensive trust agreement tailored to your needs</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Pour-Over Will</h3>
                <p className="text-gray-600 text-sm">Backup will to handle any assets not in the trust</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Financial Power of Attorney</h3>
                <p className="text-gray-600 text-sm">Designate someone to handle financial matters if needed</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Healthcare Directives</h3>
                <p className="text-gray-600 text-sm">Medical decision-making authority and end-of-life wishes</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Funding Guidance</h3>
                <p className="text-gray-600 text-sm">Instructions for transferring assets into the trust</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Ongoing Support</h3>
                <p className="text-gray-600 text-sm">Guidance for trust administration and modifications</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Is a Trust Right for You?</h2>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation to discuss whether a trust or will package best meets your estate planning goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/consultation" className="btn btn-primary btn-lg">
                Schedule Free Consultation
              </Link>
              <a href="tel:3142662649" className="btn btn-outline btn-lg">
                Call (314) 266-2649
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              <Link to="/wills" className="link">Compare with Will Package</Link>
            </p>
          </div>
        </div>
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Trusts;