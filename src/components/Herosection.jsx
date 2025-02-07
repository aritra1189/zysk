import { useState } from "react";
import { ChevronDown, PlayCircle, LogOut, Settings, Users, HelpCircle, Grid, Key, FileText, Slack, Zap, Box } from "lucide-react";
import avatar from '../assets/avator.jpg';
import zysk from '../assets/logo1.jpg';
import main from '../assets/image1.png';
import cmp1 from '../assets/cmp1.png';
import cmp2 from '../assets/cmp2.png';
import cmp3 from '../assets/cmp3.png';
import cmp4 from '../assets/cmp4.png';
import cmp5 from '../assets/cmp5.png';
import cmp6 from '../assets/cmp6.png';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-none shadow-none">
        {/* Left Section: Logo & Menu */}
        <div className="flex items-center gap-6">
          <img src={zysk} alt="Logo" className="h-10 border-none shadow-none" />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden flex items-center text-gray-700"
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button> 
          <div className="hidden md:flex space-x-4 text-gray-700 font-bold">
            <a href="#" className="hover:opacity-75">Home</a>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:opacity-75">
                <span>Products</span> <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:opacity-75">
                <span>Resources</span> <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a>
              </div>
            </div>
            <a href="#" className="hover:opacity-75">Pricing</a>
          </div>
        </div>

        {/* User Avatar */}
        <div className="hidden md:block relative">
          <img
            src={avatar}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer border-none shadow-none"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          />
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2">
              <div className="px-4 py-2 flex items-center space-x-3 border-b">
                <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Olivia Rhye</p>
                  <p className="text-gray-500 text-sm">olivia@untitledui.com</p>
                </div>
              </div>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Key className="mr-2" size={16} /> View Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Settings className="mr-2" size={16} /> Settings</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Zap className="mr-2" size={16} /> Keyboard Shortcuts</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Grid className="mr-2" size={16} /> Company Profile</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Users className="mr-2" size={16} /> Team</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><FileText className="mr-2" size={16} /> Changelog</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Slack className="mr-2" size={16} /> Slack Community</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><HelpCircle className="mr-2" size={16} /> Support</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Box className="mr-2" size={16} /> API</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center text-red-500"><LogOut className="mr-2" size={16} /> Log Out</a>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-md rounded-lg py-2 z-50 w-64">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
          <div className="relative">
            <button 
             onClick={() => setIsProductsOpen(!isProductsOpen)}
             className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
              Products <ChevronDown size={16} />
            </button>
            {isProductsOpen && (
             <div className="pl-6">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
             </div>
      )}
           </div>
          <div className="relative">
            <button 
            onClick={() => setIsResourcesOpen(!isResourcesOpen)} 
            className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
              Resources <ChevronDown size={16} />
            </button>
            {isResourcesOpen && (
                <div className="pl-6">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 1</a>
                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Resource 2</a>
                </div>
                 )}
              </div>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Pricing</a>
          <div className="px-4 py-2 border-t">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Olivia Rhye</p>
                <p className="text-gray-500 text-sm">olivia@untitledui.com</p>
              </div>
            </div>
            {isProfileOpen &&(
              <div className="mt-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Key className="mr-2" size={16} /> View Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Settings className="mr-2" size={16} /> Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Zap className="mr-2" size={16} /> Keyboard Shortcuts</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Grid className="mr-2" size={16} /> Company Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Users className="mr-2" size={16} /> Team</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><FileText className="mr-2" size={16} /> Changelog</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Slack className="mr-2" size={16} /> Slack Community</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><HelpCircle className="mr-2" size={16} /> Support</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center"><Box className="mr-2" size={16} /> API</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center text-red-500"><LogOut className="mr-2" size={16} /> Log Out</a>
              </div>
            )}
            </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center py-20 px-8 bg-white max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mt-6">Beautiful analytics to grow smarter</h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-8 py-3 border rounded-full text-gray-700 font-medium flex items-center transition-all duration-300 transform hover:bg-gray-300 hover:scale-105">
            <PlayCircle size={24} className="mr-2 "/> Demo
          </button>
          <button className="px-8 py-3 bg-red-500 text-white rounded-full font-medium transition-all duration-300 transform hover:bg-violet-500 hover:scale-105">Sign up</button>
        </div>
      </div>

      {/* Main Image Section */}
      <div className="flex justify-center items-center my-8">
        <img 
          src={main} 
          alt="Main Dashboard Preview" 
          className="max-w-[90%] h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl cursor-pointer" 
        />
      </div>

      {/* Company Logos Section */}
      <div className="py-10 bg-white text-center">
        <p className="text-gray-600 text-lg mb-6">Join 4,000+ companies already growing</p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {[cmp1, cmp2, cmp3, cmp4, cmp5, cmp6].map((cmp, index) => (
            <img key={index} src={cmp} alt={`Company ${index + 1}`} className="h-10" />
          ))}
        </div>
      </div>
    </>
  );
}


