import React from "react";
import logo from '../assets/logo1.jpg'
const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-gray-700 text-sm">
          {/* Product */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li className="font-medium hover:opacity-70 transition">Overview</li>
              <li className="font-medium hover:opacity-70 transition">Features</li>
              <li className="flex items-center font-medium hover:opacity-70 transition">
                Solutions <span className="ml-2 bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded-full">New</span>
              </li>
              <li className="font-medium hover:opacity-70 transition">Tutorials</li>
              <li className="font-medium hover:opacity-70 transition">Pricing</li>
              <li className="font-medium hover:opacity-70 transition">Releases</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="font-medium hover:opacity-70 transition">About us</li>
              <li className="font-medium hover:opacity-70 transition">Careers</li>
              <li className="font-medium hover:opacity-70 transition">Press</li>
              <li className="font-medium hover:opacity-70 transition">News</li>
              <li className="font-medium hover:opacity-70 transition">Media kit</li>
              <li className="font-medium hover:opacity-70 transition">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li className="font-medium hover:opacity-70 transition">Blog</li>
              <li className="font-medium hover:opacity-70 transition">Newsletter</li>
              <li className="font-medium hover:opacity-70 transition">Events</li>
              <li className="font-medium hover:opacity-70 transition">Help centre</li>
              <li className="font-medium hover:opacity-70 transition">Tutorials</li>
              <li className="font-medium hover:opacity-70 transition">Support</li>
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Use cases</h3>
            <ul className="space-y-2">
              <li className="font-medium hover:opacity-70 transition">Startups</li>
              <li className="font-medium hover:opacity-70 transition">Enterprise</li>
              <li className="font-medium hover:opacity-70 transition">Government</li>
              <li className="font-medium hover:opacity-70 transition">SaaS centre</li>
              <li className="font-medium hover:opacity-70 transition">Marketplaces</li>
              <li className="font-medium hover:opacity-70 transition">Ecommerce</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Social</h3>
            <ul className="space-y-2">
              <li className="font-medium hover:opacity-70 transition">Twitter</li>
              <li className="font-medium hover:opacity-70 transition">LinkedIn</li>
              <li className="font-medium hover:opacity-70 transition">Facebook</li>
              <li className="font-medium hover:opacity-70 transition">GitHub</li>
              <li className="font-medium hover:opacity-70 transition">AngelList</li>
              <li className="font-medium hover:opacity-70 transition">Dribbble</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li className="font-medium hover:opacity-60 transition">Terms</li>
              <li className="font-medium hover:opacity-60 transition">Privacy</li>
              <li className="font-medium hover:opacity-60 transition">Cookies</li>
              <li className="font-medium hover:opacity-60 transition">Licenses</li>
              <li className="font-medium hover:opacity-60 transition">Settings</li>
              <li className="font-medium hover:opacity-60 transition">Contact</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6">
          {/* Logo */}
          <div>
            <img src={logo} alt="Zysk Logo" className="h-6" />
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">© 2077 zysktechnologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


