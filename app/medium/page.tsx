import profile from "./profile.png";

import { Users, BookOpen, TrendingUp, ExternalLink } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Jaivardhan Deshwal - Medium Writer | Havocmedia",
    description: "Follow Jaivardhan Deshwal on Medium for insights on technology, creativity, and personal growth. 50+ published stories with 40 followers. Part of Havocmedia.",
    keywords: ["Jaivardhan Deshwal", "Havocmedia", "Medium writer", "tech articles", "creative writing", "personal growth", "technology insights"],
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
        title: "Jaivardhan Deshwal - Medium Writer | Havocmedia",
        description: "Follow Jaivardhan Deshwal on Medium for insights on technology, creativity, and personal growth. 50+ published stories with 40 followers. Part of Havocmedia.",
        url: "https://yourwebsite.com/medium",
        siteName: "Havocmedia",
        images: [
            {
                url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
                width: 1200,
                height: 675,
                alt: "Jaivardhan Deshwal Medium Profile - Havocmedia Writer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Jaivardhan Deshwal - Medium Writer | Havocmedia",
        description: "Follow Jaivardhan Deshwal on Medium for insights on technology, creativity, and personal growth. 50+ published stories.",
        creator: "@deshwaljaivardhan",
        images: ["https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"],
    },
    alternates: {
        canonical: "https://yourwebsite.com/medium",
    },
};

export default function MediumShowcase() {
    const seoData = {
        author: "Jaivardhan Deshwal",
        brand: "Havocmedia",
        mediumUrl: "https://medium.com/@deshwaljaivardhan",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
    };

    // JSON-LD Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jaivardhan Deshwal",
        "url": "https://havocmedia.in/medium",
        "sameAs": [
            "https://medium.com/@deshwaljaivardhan"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Havocmedia"
        },
        "jobTitle": "Writer & Content Creator",
        "description": "Writer and content creator specializing in technology, creativity, and personal growth",
        "image": seoData.image,
        "knowsAbout": ["Technology", "Creative Writing", "Personal Development", "Digital Media"]
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="min-h-screen pt-15 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
                {/* Animated background effect */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
                </div>

                <main className="relative max-w-6xl mx-auto px-6 py-16">
                    {/* Header with semantic HTML */}
                    <header className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                            Jaivardhan Deshwal - Medium Stories
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Writer at <span itemProp="brand">Havocmedia</span> - Exploring ideas, sharing insights on technology, creativity, and personal growth
                        </p>
                    </header>

                    {/* Stats Cards with semantic markup */}
                    <section aria-label="Profile Statistics" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <article className="bg-gray-900 bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:transform hover:scale-105">
                            <div className="flex items-center mb-3">
                                <Users className="w-6 h-6 text-purple-400 mr-3" aria-hidden="true" />
                                <h2 className="text-gray-400 text-sm font-medium">Followers</h2>
                            </div>
                            <p className="text-4xl font-bold" itemProp="followersCount">40</p>
                        </article>

                        <article className="bg-gray-900 bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:transform hover:scale-105">
                            <div className="flex items-center mb-3">
                                <BookOpen className="w-6 h-6 text-blue-400 mr-3" aria-hidden="true" />
                                <h2 className="text-gray-400 text-sm font-medium">Published Stories</h2>
                            </div>
                            <p className="text-4xl font-bold" itemProp="articlesPublished">50+</p>
                        </article>

                        <article className="bg-gray-900 bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10 hover:border-opacity-20 transition-all hover:transform hover:scale-105">
                            <div className="flex items-center mb-3">
                                <TrendingUp className="w-6 h-6 text-green-400 mr-3" aria-hidden="true" />
                                <h2 className="text-gray-400 text-sm font-medium">Promotions</h2>
                            </div>
                            <p className="text-4xl font-bold">10+</p>
                        </article>
                    </section>

                    {/* Main Screenshot */}
                    <section aria-label="Medium Profile Preview" className="mb-12">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" aria-hidden="true"></div>
                            <div className="relative bg-black rounded-3xl overflow-hidden border border-white border-opacity-10">
                                <img
                                    src={profile.src}
                                    alt="Jaivardhan Deshwal Medium Profile - Havocmedia Writer showcasing technology and creative writing articles"
                                    className="w-full h-auto"
                                    loading="lazy"
                                    width={1200}
                                    height={675}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section aria-label="Follow on Medium" className="bg-gradient-to-r from-purple-900 from-opacity-30 to-blue-900 to-opacity-30 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-10 mb-12">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Join the Journey with Havocmedia
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Follow <strong>Jaivardhan Deshwal</strong> on Medium for weekly insights on technology, creativity, and personal growth.
                                New stories published every week with actionable takeaways you can apply today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={seoData.mediumUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    aria-label="Visit Jaivardhan Deshwal's Medium Profile"
                                >
                                    Visit My Medium Profile
                                    <ExternalLink className="ml-2 w-5 h-5" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <footer className="text-center text-gray-500 text-sm">
                        <p>✨ <span itemProp="slogan">Sharing knowledge, one story at a time</span> - Havocmedia © 2025</p>
                    </footer>
                </main>

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
        </>
    );
}