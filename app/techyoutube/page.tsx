import {
  Play,
  Users,
  Eye,
  ThumbsUp,
  Bell,
  TrendingUp,
  Calendar,
  Award,
  Instagram,
  Youtube,
} from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {

  title: "Jaivardhan Deshwal - YouTube Channel | Havocmedia - AI, Tech & Tutorials",
  description: "Subscribe to Jaivardhan Deshwal's YouTube channel for AI updates, tech discussions, coding tutorials, and video editing tips. Part of Havocmedia. Join our creative community!",
  keywords: [
    "Jaivardhan Deshwal",
    "Havocmedia",
    "YouTube channel",
    "AI tutorials",
    "tech discussions",
    "coding tutorials",
    "video editing",
    "AI automations",
    "technology content creator"
  ],
  authors: [{ name: "Jaivardhan Deshwal" }],
  creator: "Jaivardhan Deshwal",
  publisher: "Havocmedia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "profile",
    title: "Jaivardhan Deshwal - YouTube Channel | Havocmedia",
    description: "Subscribe for weekly videos on AI updates, tech discussions and tutorials. Join our creative community at Havocmedia!",
    url: "https://yourwebsite.com/youtube",
    siteName: "Havocmedia",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
        width: 1200,
        height: 675,
        alt: "Jaivardhan Deshwal YouTube Channel - Havocmedia Tech Content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaivardhan Deshwal - YouTube Channel | Havocmedia",
    description: "Subscribe for AI updates, tech discussions and coding tutorials. Join our creative community!",
    creator: "@deshwaljaivardhan",
    images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://yourwebsite.com/youtube",
  },
};


export default function YouTubeShowcase() {
  const channelUrl = "https://www.youtube.com/@Jaivardhan_Deshwal";
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Subscribers",
      value: "400",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      label: "Total Views",
      value: "50k+",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      label: "Promotions",
      value: "5",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Play className="w-6 h-6" />,
      label: "Videos",
      value: "140+",
      color: "from-green-500 to-emerald-600",
    },
  ];


  const playlists = [
    {
      title: "Cinematic Series",
      videos: 24,
      thumbnail: "bg-gradient-to-br from-red-600 to-orange-600",
    },
    {
      title: "Tutorial Collection",
      videos: 42,
      thumbnail: "bg-gradient-to-br from-blue-600 to-cyan-600",
    },
    {
      title: "Behind The Scenes",
      videos: 18,
      thumbnail: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      title: "Collaborations",
      videos: 15,
      thumbnail: "bg-gradient-to-br from-green-600 to-emerald-600",
    },
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Promotions",
      description: "5 Promotions",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Latest Insights",
      description: "Always Updated",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "6 months Strong",
      description: "Content since June 2025",
    },
  ];

  const instaURL = "https://www.instagram.com/dailycodesnacks/"
  const instaIds = ['DQrN1hdkb2Q', 'DQc9wjhkx1d', 'DQZgXOzgWHs', 'DQZgHn8AX-L', 'DQULxSoAb15', 'DQG6J21ERsH', 'DQG54Tfkb8D', 'DQCI_hMkZsF', 'DP_TJePEZkW', 'DP8vHurEVb2']

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Channel Banner */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Channel Info */}
      <div className="relative -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
            {/* Channel Avatar */}
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1 shadow-2xl shadow-purple-900/50">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <Play
                  className="w-20 h-20 text-purple-400"
                  fill="currentColor"
                />
              </div>
            </div>

            {/* Channel Details */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Jaivardhan_Deshwal
              </h1>
              <p className="text-gray-400 mb-4">
                @Jaivardhan_Deshwal • Code | AI | Tech discussions
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="https://www.youtube.com/@Jaivardhan_Deshwal" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-900/50 flex items-center gap-2 font-semibold">
                  <Bell className="w-5 h-5" />
                  Subscribe
                </a>
                <a
                  href={instaURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full hover:from-pink-700 hover:to-purple-800 transition-all duration-200 shadow-lg shadow-purple-900/50 flex items-center gap-2 font-semibold"
                >
                  <Instagram className="w-5 h-5" />
                  Follow
                </a>
                <a
                  href="https://www.youtube.com/@Jaivardhan_Deshwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 border border-purple-500/30 rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm font-semibold"
                >
                  View Channel
                </a>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
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
          <div className="bg-gradient-to-br from-purple-900/10 to-purple-950/20 rounded-3xl p-8 border border-purple-500/20 mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              About the Channel
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Trying out new projects so thought why not record as well. Might find some interesting people along the way.
              <br />Connect if you wanna share or collab!
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Tech Discussions
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Video Editing
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Tutorials
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                AI Automations
              </span>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/20 to-purple-950/30 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-600/50">
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

          {/* Content */}

          <div className="flex gap-4 mb-8 border-b border-purple-900/30">
            <button
              className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 flex items-center gap-2 border-red-500 text-red-400`}
            >
              <Youtube className="w-5 h-5" />
              YouTube Videos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            {[
              "Nog8CnVDlqg",
              "we3mtv73TiM",
              "DnkBMqgsifY",
              "vp6gz02rwxI",
              "Z5l36LpjVqY",
              "Gwnu8AmOrTk",
              "pzI3UrOSaUA",
            ].map((videoId, index) => (
              <div
                key={index}
                className="group bg-purple-900/20 border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video player ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}


          </div>


          {/* Instagram Content */}
          <div className="flex gap-4 mb-8 border-b border-purple-900/30">
            <button
              className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 flex items-center gap-2 border-pink-500 text-pink-400`}
            >
              <Instagram className="w-5 h-5" />
              Instagram Posts
            </button>
          </div>

          <section className="relative" aria-label="Instagram posts gallery">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-3xl blur-xl pointer-events-none" aria-hidden="true"></div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {instaIds.map((id, index) => (
                <article
                  key={id}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated border gradient */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur pointer-events-none" aria-hidden="true"></div>

                  {/* Card container */}
                  <div className="relative bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" aria-hidden="true"></div>

                    {/* Instagram embed */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <iframe
                        title={`Instagram Post ${index + 1}`}
                        className="w-full h-full"
                        src={`https://www.instagram.com/p/${id}/embed`}
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        loading="lazy"
                      ></iframe>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" aria-hidden="true"></div>
                  </div>

                  {/* Floating index badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" aria-hidden="true">
                    {index + 1}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer CTA */}
      <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/20 rounded-3xl p-12 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5" aria-hidden="true"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Join Our Creative Community at Havocmedia
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe to <strong>Jaivardhan Deshwal</strong> for weekly videos on AI updates, discussions and tutorials to keep yourself ahead of competition
              </p>
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-xl shadow-red-900/50 text-lg font-semibold items-center gap-2"
                aria-label="Subscribe to Jaivardhan Deshwal's YouTube Channel Now"
              >
                <Bell className="w-6 h-6" aria-hidden="true" />
                Subscribe Now
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8">
          <p>🎬 Creating tech content, one video at a time - Havocmedia © 2025</p>
        </div>
      </footer>
    </div>
  );
}
