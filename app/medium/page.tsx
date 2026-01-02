import { Users, BookOpen, TrendingUp, ExternalLink } from 'lucide-react';
import profile from "./profile.png";

export default function MediumShowcase() {
  // Replace these with your actual Medium details
  const mediumProfile = {
    username: "yourusername",
    profileUrl: "https://medium.com/@yourusername",
    followers: "1.2K",
    stories: "42",
    engagement: "15K+",
    screenshotUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80" // Replace with actual screenshot
  };

  return (
    <div className="min-h-screen pt-15 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            My Medium Stories
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring ideas, sharing insights, and building a community of curious minds
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:transform hover:scale-105">
            <div className="flex items-center mb-3">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-gray-400 text-sm font-medium">Followers</h3>
            </div>
            <p className="text-4xl font-bold">40</p>
          </div>

          <div className="bg-gray-900 bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:transform hover:scale-105">
            <div className="flex items-center mb-3">
              <BookOpen className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-gray-400 text-sm font-medium">Published Stories</h3>
            </div>
            <p className="text-4xl font-bold">50+</p>
          </div>

          <div className="bg-gray-900 bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:transform hover:scale-105">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3" />
              <h3 className="text-gray-400 text-sm font-medium">Promotions</h3>
            </div>
            <p className="text-4xl font-bold">10+</p>
          </div>
        </div>

        {/* Main Screenshot */}
        <div className="mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-black rounded-3xl overflow-hidden border border-white border-opacity-10">
              <img 
                src={profile.src}
                alt="Medium Profile Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Promotion Section */}
        <div className="bg-gradient-to-r from-purple-900 from-opacity-30 to-blue-900 to-opacity-30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-10 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Journey
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Follow me on Medium for weekly insights on technology, creativity, and personal growth. 
              New stories published every week with actionable takeaways you can apply today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={"https://medium.com/@deshwaljaivardhan"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Visit My Medium Profile
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          <p>✨ Sharing knowledge, one story at a time</p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}