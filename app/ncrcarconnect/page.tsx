
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

  const channelStats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "YouTube Subs",
      value: "--",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Instagram",
      value: "--",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      label: "Total Views",
      value: "--",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Sales",
      value: "--",
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
      title: "Promotions",
      description: "--",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Verified Creator",
      description: "--",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Engagement",
      description: "--",
      gradient: "from-blue-500 to-cyan-600",
    },
  ];

  const youtubeUrl = "https://www.youtube.com/@NCR_Car_Connect";
  const instaUrl = "https://www.instagram.com/ncr_car_connect";

  const videoIds = ['Kmz_103ODnM', 'mBGcKk5bjtY', 'GPeavaZJJOA', '49KOEKrg6YY', 'dAYpDZBmTTc']
  const instaIds = ['DS9cjlWk6DS', 'DS9cYn1k3Ya', 'DS9cDOaExy0', 'DS9b0V8E1SH', 'DS6wRb-E0xt', 'DS6wGMIk76Y', 'DS6vokNE08Q', 'DRB2BJhk2o6']

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
                Budget Car Reviews • Insights • Buying Guides
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-900/50 flex items-center gap-2 font-semibold"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe
                </a>
                <a
                  href={instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
              Welcome to NCR Car Connect, where car passion meets practical advice.

              We believe in "Information over Entertainment." If you are looking for loud music and cinematic drone shots without any substance, this isn't the place. But if you want to know which car handles Delhi's potholes best, how to spot a "flooded" engine in the used market, or which new launches are worth your hard earned money, you're in the right spot.
              <br /><br />
              On this channel: <br />
              ✅ Buying checklists for new & used cars. <br />✅ Delhi-NCR specific maintenance and service tips. <br />✅ Brutally honest reviews based on long-term ownership. <br />✅ No sponsored fluff about things you dont care about.


              <br /><br />Hit subscribe to become a smarter car owner today.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-sm">
                Budget Car Reviews
              </span>
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                Delhi-NCR Maintenance Tips
              </span>
              <span className="px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-sm">
                Buying Guides
              </span>
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-sm">
                Tips and tricks
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
              className={`px-6 py-3 font-semibold transition-all duration-200 border-b-2 flex items-center gap-2 border-red-500 text-red-400`}
            >
              <Youtube className="w-5 h-5" />
              YouTube Videos
            </button>
          </div>

          {/* YouTube Content */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

              {videoIds.map((videoId, index) => (
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
                        // @ts-ignore
                        allowtransparency="true"
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

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-900/30 via-purple-900/30 to-pink-950/20 rounded-3xl p-12 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-purple-600/5 to-pink-600/5"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-purple-300 bg-clip-text text-transparent">
                Join the NCR Car Connect Family
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Subscribe on YouTube and follow on Instagram for genuine opinion on cars in Delhi-NCR, buying guides, tips and tricks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={youtubeUrl} className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-xl shadow-red-900/50 text-lg font-semibold flex items-center gap-2 justify-center">
                  <Youtube className="w-6 h-6" />
                  Subscribe on YouTube
                </a>
                <a href={instaUrl} className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full hover:from-pink-700 hover:to-purple-800 transition-all duration-200 shadow-xl shadow-purple-900/50 text-lg font-semibold flex items-center gap-2 justify-center">
                  <Instagram className="w-6 h-6" />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
