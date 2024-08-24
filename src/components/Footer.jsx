// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:contact@example.com" className="hover:underline">
                contact@example.com
              </a>
            </p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <p className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:underline"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:underline"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white hover:underline"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 mt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
