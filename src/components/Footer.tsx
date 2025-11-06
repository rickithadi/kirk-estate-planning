import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  siteName: string;
  text: string;
  links: Array<{ text: string; href: string; internal: boolean }>;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: Array<{ text: string; href: string; internal: boolean }>;
  html: string;
}

const Footer: React.FC<FooterProps> = ({
  siteName,
  text,
  links,
  contactInfo,
  socialLinks,
  html,
}) => {
  return (
    <footer className="bg-brand-6 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteName}</h3>
            <p className="text-brand-5 mb-4">{text}</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  {link.internal ? (
                    <Link to={link.href} className="text-brand-3 hover:text-brand-4">
                      {link.text}
                    </Link>
                  ) : (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-brand-3 hover:text-brand-4">
                      {link.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-brand-5 mb-2">{contactInfo.phone}</p>
            <p className="text-brand-5 mb-2">{contactInfo.email}</p>
            <p className="text-brand-5">{contactInfo.address}</p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-brand-3 hover:text-brand-4">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-brand-5 pt-8 mt-8">
          <p className="text-brand-5 text-center" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;