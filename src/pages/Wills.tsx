import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Wills: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="Will Package - Kirk Estate Planning"
        description="Last Will & Testament provides instructions to probate court about your wishes for children, assets, and executor."
        canonicalUrl="https://kirkestateplanning.com/wills"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Will Package</h1>
            <p className="text-xl text-gray-600">
              Comprehensive estate planning with a Last Will & Testament
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop" 
                alt="Family planning their estate" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What Is a Last Will & Testament?</h2>
              <p className="text-gray-700 mb-6">
                A Last Will & Testament provides instructions to the probate court indicating your exact wishes about:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Who will care for your children</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Who is in charge of implementing your wishes (your executor)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>How your assets will be distributed</span>
                </div>
              </div>
              <div className="alert alert-info">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-sm">Your will and all other documents filed with the probate court will be public record.</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Will Package Includes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Last Will & Testament</h3>
                <p className="text-gray-600 text-sm">Complete will document with your specific instructions</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Guardian Designation</h3>
                <p className="text-gray-600 text-sm">Legal designation for child guardianship</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Executor Authorization</h3>
                <p className="text-gray-600 text-sm">Powers and responsibilities for your executor</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Asset Distribution</h3>
                <p className="text-gray-600 text-sm">Detailed instructions for asset allocation</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Legal Compliance</h3>
                <p className="text-gray-600 text-sm">Missouri and Illinois state law compliance</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Professional Guidance</h3>
                <p className="text-gray-600 text-sm">Expert advice throughout the process</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold mb-3">Consider a Trust Package</h3>
            <p className="text-gray-700 mb-4">
              While a will is essential, a trust package offers additional benefits including avoiding probate, 
              maintaining privacy, and potentially reducing costs for your beneficiaries.
            </p>
            <Link to="/trusts" className="btn btn-outline btn-sm">
              Compare with Trust Package
            </Link>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Will?</h2>
            <p className="text-gray-600 mb-6">
              Begin with a free consultation to discuss your specific needs and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/consultation" className="btn btn-primary btn-lg">
                Schedule Free Consultation
              </Link>
              <a href="tel:3142662649" className="btn btn-outline btn-lg">
                Call (314) 266-2649
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Wills;