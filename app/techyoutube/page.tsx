import {
  Play,
  Users,
  Eye,
  ThumbsUp,
  Bell,
  TrendingUp,
  Calendar,
  Award,
} from "lucide-react";

export default function YouTubeShowcase() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Subscribers",
      value: "125K",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      label: "Total Views",
      value: "5.2M",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      label: "Likes",
      value: "328K",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Play className="w-6 h-6" />,
      label: "Videos",
      value: "247",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const videos = [
    {
      title: "Amazing Cinematic Masterpiece",
      views: "1.2M",
      date: "2 weeks ago",
      duration: "12:34",
      thumbnail: "bg-gradient-to-br from-purple-600 via-pink-600 to-red-600",
    },
    {
      title: "Behind The Scenes: Production Magic",
      views: "856K",
      date: "1 month ago",
      duration: "18:45",
      thumbnail: "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600",
    },
    {
      title: "Creative Process Breakdown",
      views: "623K",
      date: "2 months ago",
      duration: "15:20",
      thumbnail: "bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600",
    },
    {
      title: "Top 10 Video Editing Tips",
      views: "945K",
      date: "3 months ago",
      duration: "22:15",
      thumbnail: "bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600",
    },
    {
      title: "Epic Collaboration Project",
      views: "1.5M",
      date: "4 months ago",
      duration: "25:30",
      thumbnail: "bg-gradient-to-br from-orange-600 via-red-600 to-pink-600",
    },
    {
      title: "Gear Review: Best Camera Setup",
      views: "712K",
      date: "5 months ago",
      duration: "16:42",
      thumbnail:
        "bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600",
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
      title: "Silver Play Button",
      description: "100K Subscribers",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Top Creator",
      description: "Top 5% in category",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "3 Years Strong",
      description: "Content since 2021",
    },
  ];

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
                Creative Media Studio
              </h1>
              <p className="text-gray-400 mb-4">
                @creativemedia • Creating stunning visual stories
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-900/50 flex items-center gap-2 font-semibold">
                  <Bell className="w-5 h-5" />
                  Subscribe
                </button>
                <button className="px-6 py-3 bg-white/10 border border-purple-500/30 rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm font-semibold">
                  View Channel
                </button>
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
              Welcome to Creative Media Studio! We create high-quality cinematic
              content, tutorials, and behind-the-scenes looks at our production
              process. Join our community of 125K+ creators and filmmakers who
              are passionate about visual storytelling.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Cinematography
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Video Editing
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Tutorials
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Behind The Scenes
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative mb-3 overflow-hidden rounded-2xl">
                  <div
                    className={`aspect-video ${video.thumbnail} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="w-16 h-16 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-black/80 transition-colors">
                      <Play className="w-8 h-8" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/20 rounded-3xl p-12 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Join Our Creative Community
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe for weekly videos on cinematography, editing tips, and
                behind-the-scenes content.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-xl shadow-red-900/50 text-lg font-semibold flex items-center gap-2 mx-auto">
                <Bell className="w-6 h-6" />
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
