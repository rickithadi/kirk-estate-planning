import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  siteName: string;
  logo: Array<any>;
  navigation: Array<{
    html: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  }>;
  contactInfo: {
    phone: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  siteName,
  logo,
  navigation,
  contactInfo,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-6 shadow-md">
      <nav className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <Link to="/" className="text-brand-1 text-2xl font-bold">
            {siteName}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {navigation[0].links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className={({ isActive }) =>
                `px-4 py-2 text-brand-5 hover:text-brand-1 transition-colors ${
                  isActive ? 'text-brand-1 font-bold' : ''
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navigation[0].links.map((link, index) => (
                <li key={index}>
                  <Link to={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`tel:${contactInfo.phone}`}
            className="btn btn-ghost text-brand-1 hidden lg:inline-flex"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="btn btn-primary text-white ml-4 hidden lg:inline-flex"
          >
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;