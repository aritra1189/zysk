import { UsersRound, ExternalLink, MessagesSquare, MessageCircleHeart, Zap } from "lucide-react";
import section from '../assets/section.png';

export default function FeaturesSection() {
  return (
    <>
      <div className="py-10 bg-white text-center">
        <h2 className="text-red-500 text-sm font-semibold">Features</h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">
          Analytics that feels like it’s from the future
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
          {/* Share Team Inboxes */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <UsersRound size={32} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Share team inboxes</h3>
            <p className="text-gray-600 mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
            </p>
          </div>

          {/* Deliver Instant Answers */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Zap size={32} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Deliver instant answers</h3>
            <p className="text-gray-600 mt-2">
              An all-in-one customer service platform that helps you balance everything your customers need to be happy.
            </p>
          </div>

          {/* Manage Your Team with Reports */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <ExternalLink size={32} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Manage your team with reports</h3>
            <p className="text-gray-600 mt-2">
              Measure what matters with our easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.
            </p>
          </div>

          {/* Connect with Customers */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <MessagesSquare size={32} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Connect with customers</h3>
            <p className="text-gray-600 mt-2">
              Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.
            </p>
          </div>

          {/* Connect the Tools You Already Use */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <Zap size={32} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Connect the tools you already use</h3>
            <p className="text-gray-600 mt-2">
              Explore 100+ integrations that make your day-to-day workflow more efficient and familiar.
            </p>
          </div>

          {/* Our People Make the Difference */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-gray-100 rounded-lg">
              <MessageCircleHeart size={32} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mt-4">Our people make the difference</h3>
            <p className="text-gray-600 mt-2">
              We’re an extension of your customer service team, and all of our resources are free. Chat with us 24/7 when you need help.
            </p>
          </div>
        </div>
      </div>

      {/* Section Image */}
      <div className="max-w-8xl mx-auto mt-16 px-4">
        <img src={section} alt="Feature section" className="w-full object-cover rounded-lg shadow-md" />
      </div>
    </>
  );
}


