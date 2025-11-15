import { Menu, X, Play, Zap, Star } from "lucide-react";
import { COMPANY_NAME, COLORS } from "./constants";
import { MainButtons } from "./components/MainButtons";

export default function Home() {
  return (
    <div className={`min-h-screen ${COLORS.bg} ${COLORS.text}`}>

      {/* Hero Section */}
      <div
        className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden`}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 ${COLORS.gradientHero}`}></div>
        <div
          className={`absolute top-20 left-10 w-72 h-72 ${COLORS.pulse1} rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 ${COLORS.pulse2} rounded-full blur-3xl animate-pulse delay-700`}
        ></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className={`block ${COLORS.gradientText1}`}>
                Create Stories
              </span>
              <span className={`block ${COLORS.gradientText2}`}>
                That Captivate
              </span>
            </h1>
            <p className={`text-xl ${COLORS.textGray} max-w-3xl mx-auto mb-10`}>
              Transform your vision into stunning visual experiences. We craft
              compelling media content that resonates with your audience and
              elevates your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`cursor-pointer px-8 py-4 rounded-lg transition-all duration-200 text-lg font-semibold ${COLORS.buttonPrimary}`}
              >
                View Our Work
              </button>
              <button
                className={`cursor-pointer px-8 py-4 rounded-lg transition-all duration-200 text-lg font-semibold ${COLORS.buttonSecondary}`}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <MainButtons />

      {/* Features Section */}
      <div className={`py-20 px-4 sm:px-6 lg:px-8 ${COLORS.featuresBg}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Play className="w-8 h-8" />,
                title: "Video Production",
                description:
                  "Cinematic storytelling that brings your brand to life with professional quality and creative excellence.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Turnaround",
                description:
                  "Efficient workflow and dedicated team ensuring your projects are delivered on time, every time.",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                description:
                  "Industry-leading standards with attention to detail that sets your content apart from the competition.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer group p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${COLORS.featureCard}`}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-shadow ${COLORS.featureIcon}`}
                >
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${COLORS.text}`}>
                  {feature.title}
                </h3>
                <p className={`${COLORS.textGray} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`rounded-3xl p-12 relative overflow-hidden ${COLORS.ctaCard}`}
          >
            <div className={`absolute inset-0 ${COLORS.ctaOverlay}`}></div>
            <div className="relative">
              <h2 className={`text-4xl font-bold mb-6 ${COLORS.ctaText}`}>
                Ready to Start Your Project?
              </h2>
              <p className={`text-xl ${COLORS.textGray} mb-8`}>
                Let's collaborate to create something extraordinary together.
              </p>
              <button
                className={`cursor-pointer px-10 py-4 rounded-lg transition-all duration-200 text-lg font-semibold ${COLORS.buttonCta}`}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 ${COLORS.footer}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={COLORS.textGrayFooter}>
            &copy; 2025 {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
