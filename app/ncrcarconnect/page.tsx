"use client";
import React, { useState } from "react";
import {
  Play,
  Users,
  Eye,
  Heart,
  MessageCircle,
  Instagram,
  Youtube,
  TrendingUp,
  Award,
  Zap,
  Car,
} from "lucide-react";
import { CAR_CHANNEL_NAME } from "../constants";

export default function CarShowcase() {
  const [activeTab, setActiveTab] = useState("youtube");

  const channelStats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "YouTube Subs",
      value: "450K",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Instagram",
      value: "280K",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      label: "Total Views",
      value: "12.5M",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Engagement",
      value: "8.2%",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const youtubeVideos = [
    {
      title: "ULTIMATE Supercar Review: Ferrari SF90",
      views: "2.1M",
      date: "1 week ago",
      duration: "15:42",
      thumbnail: "bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600",
    },
    {
      title: "Lamborghini Revuelto First Drive",
      views: "1.8M",
      date: "2 weeks ago",
      duration: "18:25",
      thumbnail: "bg-gradient-to-br from-green-600 via-lime-600 to-yellow-600",
    },
    {
      title: "Porsche 911 GT3 RS Track Day",
      views: "1.5M",
      date: "3 weeks ago",
      duration: "22:15",
      thumbnail: "bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600",
    },
    {
      title: "McLaren 750S vs 765LT Comparison",
      views: "1.3M",
      date: "1 month ago",
      duration: "19:30",
      thumbnail: "bg-gradient-to-br from-orange-600 via-red-600 to-pink-600",
    },
    {
      title: "Aston Martin DB12 Interior Tour",
      views: "956K",
      date: "1 month ago",
      duration: "12:18",
      thumbnail:
        "bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600",
    },
    {
      title: "Top 10 Hypercars of 2024",
      views: "2.5M",
      date: "2 months ago",
      duration: "25:40",
      thumbnail: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
    },
  ];

  const instagramPosts = [
    {
      image: "bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500",
      likes: "45.2K",
      comments: "892",
      caption: "Pure Italian passion 🏎️ #Ferrari",
    },
    {
      image: "bg-gradient-to-br from-lime-600 via-green-500 to-emerald-500",
      likes: "38.7K",
      comments: "654",
      caption: "Green machine 💚 #Lamborghini",
    },
    {
      image: "bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500",
      likes: "42.1K",
      comments: "723",
      caption: "German precision ⚡ #Porsche",
    },
    {
      image: "bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500",
      likes: "51.3K",
      comments: "1.2K",
      caption: "British elegance 🇬🇧 #McLaren",
    },
    {
      image: "bg-gradient-to-br from-pink-600 via-rose-500 to-red-500",
      likes: "39.8K",
      comments: "687",
      caption: "American muscle 🦅 #Corvette",
    },
    {
      image: "bg-gradient-to-br from-cyan-600 via-blue-500 to-indigo-500",
      likes: "44.5K",
      comments: "815",
      caption: "Speed demons 🚀 #Bugatti",
    },
    {
      image: "bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500",
      likes: "47.9K",
      comments: "934",
      caption: "Track ready 🏁 #AstonMartin",
    },
    {
      image: "bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500",
      likes: "36.2K",
      comments: "592",
      caption: "Future of luxury ⚡ #Rimac",
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Gold Play Button",
      description: "1M+ YouTube Subscribers",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Verified Creator",
      description: "Instagram Verified Badge",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Top Auto Channel",
      description: "Top 10 in Automotive",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        {/* Floating Car Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-bounce-slow">
            <Car className="w-32 h-32 text-purple-400/30" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Channel Info */}
      <div className="relative -mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
            {/* Channel Avatar */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-red-600 via-purple-600 to-pink-600 p-1.5 shadow-2xl shadow-purple-900/50">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Car className="w-24 h-24 text-red-500" strokeWidth={1.5} />
              </div>
            </div>

            {/* Channel Details */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white via-red-200 to-purple-400 bg-clip-text text-transparent">
                {CAR_CHANNEL_NAME}
              </h1>
              <p className="text-gray-400 text-lg mb-6">
                Supercar Reviews • Track Days • Automotive Excellence
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-900/50 flex items-center gap-2 font-semibold"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe
                </a>
                <a
                  href="#"
                  className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full hover:from-pink-700 hover:to-purple-800 transition-all duration-200 shadow-lg shadow-purple-900/50 flex items-center gap-2 font-semibold"
                >
                  <Instagram className="w-5 h-5" />
                  Follow
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {channelStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-purple-950/30 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* About Section */}
          <div className="bg-gradient-to-br from-red-900/10 via-purple-900/10 to-pink-950/20 rounded-3xl p-8 border border-purple-500/20 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-red-500 to-purple-500 rounded-full"></div>
              About {CAR_CHANNEL_NAME}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Welcome to AutoVerse - your ultimate destination for supercar
              reviews, exotic car spotting, and automotive content! We bring you
              up-close and personal with the world's most incredible vehicles.
              From track days with hypercars to detailed interior tours, join
              our community of 450K+ automotive enthusiasts on YouTube and 280K+
              on Instagram.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-sm">
                Supercar Reviews
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Track Days
              </span>
              <span className="px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-sm">
                Car Spotting
              </span>
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm">
                First Drives
              </span>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Achievements & Milestones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-purple-950/30 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${achievement.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Tabs */}
          <div className="flex gap-4 mb-8 border-b border-purple-900/30">
            <button
              onClick={() => setActiveTab("youtube")}
              className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 flex items-center gap-2 ${
                activeTab === "youtube"
                  ? "border-red-500 text-red-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              <Youtube className="w-5 h-5" />
              YouTube Videos
            </button>
            <button
              onClick={() => setActiveTab("instagram")}
              className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 flex items-center gap-2 ${
                activeTab === "instagram"
                  ? "border-pink-500 text-pink-400"
                  : "border-transparent text-gray-400 hover:text-gray-300"
              }`}
            >
              <Instagram className="w-5 h-5" />
              Instagram Posts
            </button>
          </div>

          {/* YouTube Content */}
          {activeTab === "youtube" && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative mb-3 overflow-hidden rounded-2xl">
                      <div
                        className={`aspect-video ${video.thumbnail} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                      >
                        <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600/80 transition-colors">
                          <Play className="w-8 h-8" fill="white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-semibold">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                      <span>•</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instagram Content */}
          {activeTab === "instagram" && (
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {instagramPosts.map((post, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl">
                      <div
                        className={`aspect-square ${post.image} group-hover:scale-110 transition-transform duration-300`}
                      ></div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-6 mb-2">
                            <div className="flex items-center gap-2">
                              <Heart className="w-6 h-6" fill="white" />
                              <span className="font-bold">{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageCircle className="w-6 h-6" />
                              <span className="font-bold">{post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-900/30 via-purple-900/30 to-pink-950/20 rounded-3xl p-12 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-purple-600/5 to-pink-600/5"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-purple-300 bg-clip-text text-transparent">
                Join the AutoVerse Family
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe on YouTube and follow on Instagram for daily supercar
                content, exclusive behind-the-scenes, and automotive excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-xl shadow-red-900/50 text-lg font-semibold flex items-center gap-2 justify-center">
                  <Youtube className="w-6 h-6" />
                  Subscribe on YouTube
                </button>
                <button className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full hover:from-pink-700 hover:to-purple-800 transition-all duration-200 shadow-xl shadow-purple-900/50 text-lg font-semibold flex items-center gap-2 justify-center">
                  <Instagram className="w-6 h-6" />
                  Follow on Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
