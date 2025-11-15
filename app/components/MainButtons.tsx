import { Play, Youtube, ArrowRight, Car } from "lucide-react";
import { NAV_1_LINK, NAV_2_LINK } from "../constants";

export const MainButtons = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Choose Your Journey
          </h1>
          <p className="text-xl text-gray-400">
            Explore our creative content across different channels
          </p>
        </div>

        {/* Buttons Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* YouTube Channel Button */}
          <a
            href={NAV_1_LINK}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900/30 via-purple-900/30 to-pink-900/20 border-2 border-purple-500/20 hover:border-red-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-purple-600/10 transition-all duration-500"></div>

            {/* Floating Icons Background */}
            <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Play className="w-32 h-32" fill="currentColor" />
            </div>

            {/* Content */}
            <div className="relative p-12">
              {/* Icon Container */}
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/50 group-hover:shadow-xl group-hover:shadow-red-600/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Youtube className="w-12 h-12" strokeWidth={2} />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-red-300 bg-clip-text text-transparent">
                  YouTube Channel
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Explore our creative media studio with stunning
                  cinematography, tutorials, and behind-the-scenes content
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">125K</div>
                  <div className="text-xs text-gray-500">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">5.2M</div>
                  <div className="text-xs text-gray-500">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">247</div>
                  <div className="text-xs text-gray-500">Videos</div>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="flex items-center justify-center gap-2 text-red-400 group-hover:text-red-300 transition-colors font-semibold text-lg">
                <span>View Channel</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          {/* Car Channel Button */}
          <a
            href={NAV_2_LINK}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/30 via-red-900/30 to-orange-900/20 border-2 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/50"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-orange-600/0 group-hover:from-purple-600/10 group-hover:to-red-600/10 transition-all duration-500"></div>

            {/* Floating Icons Background */}
            <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Car className="w-32 h-32" strokeWidth={1} />
            </div>

            {/* Content */}
            <div className="relative p-12">
              {/* Icon Container */}
              <div className="mb-8 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900/50 group-hover:shadow-xl group-hover:shadow-purple-600/50 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <Car className="w-12 h-12" strokeWidth={2} />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                  AutoVerse Channel
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Discover supercar reviews, track days, and automotive
                  excellence on YouTube & Instagram
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">450K</div>
                  <div className="text-xs text-gray-500">YouTube</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">280K</div>
                  <div className="text-xs text-gray-500">Instagram</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">
                    12.5M
                  </div>
                  <div className="text-xs text-gray-500">Views</div>
                </div>
              </div>

              {/* Arrow Button */}
              <div className="flex items-center justify-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors font-semibold text-lg">
                <span>View Channel</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-500">
            Choose a channel to explore our creative content and projects
          </p>
        </div>
      </div>
    </div>
  );
};
