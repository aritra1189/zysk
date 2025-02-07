import React from "react";
import bl1 from '../assets/bl1.png'
import bl2 from '../assets/bl2.png'
import bl3 from '../assets/bl3.png'
import ava1 from '../assets/avator1.jpg'
import ava2 from '../assets/avator2.jpg'
import ava3 from '../assets/avator1.jpg'
const BlogSection = () => {
  const blogs = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: {bl1},
      profile: {ava1},
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: {bl2},
      profile: {ava2},
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: {bl3},
      profile: {ava3},
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header Section with Button */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-red-500 font-semibold">Our blog</h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Lastest blog posts</h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg font-medium hover:bg-violet-600 transition flex items-center">
          View all posts <span className="ml-2">→</span>
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {blogs.map((blog, index) => (
          <div key={index} className="space-y-4">
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            
            {/* Category */}
            <p className="text-red-500 font-semibold">{blog.category}</p>

            {/* Title with Arrow ↗ */}
            <h3 className="text-xl font-bold text-gray-900 hover:underline cursor-pointer flex items-center">
              {blog.title} <span className="ml-1 text-lg">↗</span>
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-base">{blog.description}</p>

            {/* Author Section */}
            <div className="flex items-center space-x-3">
              <img
                src={blog.profile}
                alt={blog.author}
                className="w-8 h-8 object-cover rounded-full"
              />
              <p className="text-gray-900 font-medium">{blog.author}</p>
              <span className="text-gray-500">{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;


