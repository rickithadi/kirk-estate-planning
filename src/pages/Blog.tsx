import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import { headerProps, footerProps } from '../data/props';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "5 Essential Estate Planning Documents Everyone Needs",
      excerpt: "Learn about the core documents that form the foundation of any comprehensive estate plan, from wills to powers of attorney.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Estate Planning Basics"
    },
    {
      title: "Will vs Trust: Which is Right for Your Family?",
      excerpt: "Understanding the key differences between wills and trusts can help you make the best decision for your estate planning needs.",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Wills & Trusts"
    },
    {
      title: "Estate Planning for Young Families",
      excerpt: "Why parents with young children shouldn't wait to create an estate plan, and what documents are most important.",
      date: "March 1, 2024",
      readTime: "6 min read",
      category: "Family Planning"
    },
    {
      title: "Understanding Probate in Missouri and Illinois",
      excerpt: "A comprehensive guide to the probate process in both states and how proper planning can help your family avoid it.",
      date: "February 22, 2024",
      readTime: "8 min read",
      category: "Legal Process"
    },
    {
      title: "How to Choose an Executor for Your Will",
      excerpt: "Important considerations when selecting the person who will be responsible for carrying out your final wishes.",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Estate Planning Basics"
    },
    {
      title: "Common Estate Planning Mistakes to Avoid",
      excerpt: "Learn from the most frequent errors people make in estate planning and how to prevent them in your own plan.",
      date: "February 8, 2024",
      readTime: "6 min read",
      category: "Tips & Advice"
    }
  ];

  const categories = [
    "Estate Planning Basics",
    "Wills & Trusts", 
    "Family Planning",
    "Legal Process",
    "Tips & Advice"
  ];

  return (
    <div className="min-h-screen bg-base-100">
      <SEOHead 
        title="Estate Planning Blog - Kirk Estate Planning"
        description="Expert insights on estate planning, wills, trusts, and protecting your family's future. Educational resources from Emily Kirk."
        canonicalUrl="https://kirkestateplanning.com/blog"
      />
      <Header {...headerProps} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Estate Planning Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert insights and practical guidance for protecting your family's future
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span key={category} className="badge badge-outline">{category}</span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-12 h-12 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-blue-600 font-medium">Article</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="badge badge-primary badge-sm">{post.category}</span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold mb-3 text-gray-800">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <button className="btn btn-outline btn-sm">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="btn btn-outline">Load More Articles</button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Need Personalized Advice?</h3>
                  <p className="text-gray-600 mb-4">
                    While our blog provides general information, every family's situation is unique. 
                    Get personalized guidance with a free consultation.
                  </p>
                  <Link to="/consultation" className="btn btn-primary btn-sm w-full">
                    Schedule Free Consultation
                  </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Popular Topics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Will vs Trust</span>
                      <span className="text-gray-500 text-sm">12 articles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Probate Process</span>
                      <span className="text-gray-500 text-sm">8 articles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Family Protection</span>
                      <span className="text-gray-500 text-sm">15 articles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Estate Taxes</span>
                      <span className="text-gray-500 text-sm">6 articles</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Powers of Attorney</span>
                      <span className="text-gray-500 text-sm">9 articles</span>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Free Resources</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-blue-600 hover:underline">
                      Estate Planning Checklist
                    </a>
                    <a href="#" className="block text-blue-600 hover:underline">
                      Will vs Trust Comparison
                    </a>
                    <a href="#" className="block text-blue-600 hover:underline">
                      Executor's Guide
                    </a>
                    <a href="#" className="block text-blue-600 hover:underline">
                      Missouri Estate Planning Laws
                    </a>
                    <a href="#" className="block text-blue-600 hover:underline">
                      Illinois Estate Planning Laws
                    </a>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Emily Kirk, Attorney</strong></p>
                    <p>168 N Meramec Ave Suite 150</p>
                    <p>Clayton, MO 63105</p>
                    <p className="pt-2">
                      <a href="tel:3142662649" className="text-blue-600 hover:underline">
                        (314) 266-2649
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <strong>Hours:</strong> 9:00 AM – 6:00 PM<br />
                      <em>Flexible scheduling available</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mt-16">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Estate Plan?</h2>
              <p className="text-gray-600 mb-6">
                Don't let estate planning remain on your to-do list. Take the first step today with a free consultation.
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
      </div>
      
      <Footer {...footerProps} />
    </div>
  );
};

export default Blog;