import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "Emily Kirk did a wonderful job of explaining everything to us. She wanted some questions answered prior to our signing, and she took the time to give me a call to discuss. We were especially grateful for the Saturday appointment, especially with my husband and me working day/evening hours. My husband and I are very pleased with her and the firm. Will definitely contact again if we have a need.",
      author: "Ted and Linda",
      location: "Florissant, MO"
    },
    {
      text: "Emily was able to meld our vision and complex situation into a comprehensive, simple to understand estate plan. She was a pleasure to work with as we worked through several issues. Lastly, she has her own family and understands the importance of a family protecting their estate. I highly recommend Emily.",
      author: "Konrad and Darla",
      location: "O'Fallon, IL"
    },
    {
      text: "We had several adjustments to my trust. Emily was very careful and she did a great job explaining the details. I feel confident that the final document is precisely what I need to protect my heirs.",
      author: "Robert M.",
      location: "Kirkwood, MO"
    },
    {
      text: "We had been putting off getting our wills in order for more than 10 years. Always seemed such a daunting task to find a qualified and affordable lawyer to do this. Emily Kirk was our attorney and she did a great job of answering our questions. We had one face-to-face meeting, she drafted our documents that we reviewed electronically, then we met again for final review and signing. Simple, easy and frankly very affordable. My wife and I are very pleased to know that we have checked this important item off our to do list. Thanks Emily!",
      author: "Kerry K.",
      location: "St. Louis, MO"
    },
    {
      text: "Emily Kirk did a tremendous job, she explained everything in detail and in such a manner it could be understood. She was professional but at the same time made Kelly and I feel at ease. Overall a great experience.",
      author: "Kelly and Donald",
      location: "Belleville, IL"
    },
    {
      text: "Emily did a great job leading us through the process.",
      author: "Barbara and Dave",
      location: "St. Louis, MO"
    },
    {
      text: "I was very pleased with the competency and professionalism of Emily Kirk.",
      author: "Susan",
      location: "St. Louis, MO"
    }
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="Client Reviews - Kirk Estate Planning"
        description="Read reviews from satisfied estate planning clients across Missouri and Illinois. See why families trust Emily Kirk for their wills and trusts."
        canonicalUrl="https://kirkestateplanning.com/reviews"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Reviews</h1>
            <p className="text-xl text-gray-600 mb-8">
              Hear from families across Missouri and Illinois who have experienced peace of mind 
              through professional estate planning
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-600 ml-2">Hundreds of satisfied clients</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{review.author}</p>
                  <p className="text-gray-600 text-sm">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-blue-50 rounded-lg p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Excellence</h3>
              <p className="text-gray-600">
                Clients consistently praise Emily's competency, professionalism, and thorough explanations
              </p>
            </div>
            <div className="text-center bg-green-50 rounded-lg p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Weekend and evening appointments available to accommodate busy schedules
              </p>
            </div>
            <div className="text-center bg-purple-50 rounded-lg p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Approach</h3>
              <p className="text-gray-600">
                Emily takes time to understand each family's unique situation and makes clients feel at ease
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Common Themes in Client Feedback</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Clear explanations and patient guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Professional yet personal approach</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Accommodating and flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Streamlined, efficient process</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Affordable and transparent pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Understanding of family dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Attention to detail and accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>Peace of mind and confidence</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Our Satisfied Clients</h2>
            <p className="text-gray-600 mb-6">
              Experience the same professional, caring service that has earned these glowing reviews.
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
                <Link to="/wills" className="link link-hover">Will Package</Link>
                <Link to="/trusts" className="link link-hover">Trust Package</Link>
                <Link to="/emily" className="link link-hover">About Emily</Link>
                <Link to="/values" className="link link-hover">Our Values</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Reviews;