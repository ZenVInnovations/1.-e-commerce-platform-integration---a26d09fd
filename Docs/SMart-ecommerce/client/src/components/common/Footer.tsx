import React from 'react';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-400 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">

          {/* Company Info Section */}
          <div className='text-center'>
            <h2 className="text-3xl font-bold ">SMart</h2>
            <p className="mt-2 text-sm">Bengaluru <br /> Karnataka</p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 items-center justify-center">
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f text-xl"><FaFacebook /></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter text-xl"><FaTwitter /></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram text-xl"><FaPinterest /></i>
              </a>
              <a href="#" aria-label="Mail" className="text-white hover:text-gray-400">
                <i className="fas fa-envelope text-xl"><IoIosMail /></i>
              </a>

            </div>
          </div>

          {/* Navigation Links Section */}
          {/* Find Product Links */}
          <div className='text-center'>
            <h3 className="text-xl font-bold mb-2">Find product</h3>
            <ul className="space-y-1">
              <li className="text-sm hover:text-gray-400"><a href="http://localhost:5173/products">Products</a></li>
              <li className="text-sm hover:text-gray-400"><a href="http://localhost:5173/cart">Cart</a></li>
              <li className="text-sm hover:text-gray-400"><a href="http://localhost:5173/my-orders">Orders</a></li>

            </ul>
          </div>

          {/* Get Help Links */}
          <div className='text-center'>
            <h3 className="text-xl font-bold mb-2">Get help</h3>
            <ul className="space-y-1">
              <li className="text-sm hover:text-gray-400"><a href="#">About Us</a></li>
              <li className="text-sm hover:text-gray-400"><a href="#">Contact Us</a></li>
              <li className="text-sm hover:text-gray-400"><a href="#">Payment Policy</a></li>
            </ul>
          </div>

          {/* About Us Links */}
          <div className='text-center'>
            <h3 className="text-xl font-bold mb-2">About us</h3>
            <ul className="space-y-1">
              <li className="text-sm hover:text-gray-400"><a href="#">News</a></li>
              <li className="text-sm hover:text-gray-400"><a href="#">Service</a></li>
              <li className="text-sm hover:text-gray-400"><a href="#">FAQ's</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 mt-8 pt-4">
          <p className="text-center text-sm">&copy; 2025 SMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
