export default function ArticlesPage() {
  // Mock article data (in real app, fetch from API/database)
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development",
      description: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to edge computing.",
      author: "Sarah Johnson",
      date: "2024-12-28",
      category: "Technology",
      readTime: "8 min read",
      tags: ["Web Dev", "AI", "Future Tech"]
    },
    {
      id: 2,
      title: "Mastering Server-Side Rendering",
      description: "A comprehensive guide to implementing server-side rendering in modern web applications for improved performance and SEO.",
      author: "Michael Chen",
      date: "2024-12-25",
      category: "Tutorial",
      readTime: "12 min read",
      tags: ["SSR", "Next.js", "Performance"]
    },
    {
      id: 3,
      title: "Design Systems at Scale",
      description: "How large organizations build and maintain consistent design systems across multiple products and teams.",
      author: "Emma Williams",
      date: "2024-12-22",
      category: "Design",
      readTime: "10 min read",
      tags: ["Design", "UX", "Systems"]
    },
    {
      id: 4,
      title: "TypeScript Best Practices",
      description: "Essential patterns and practices for writing maintainable and type-safe TypeScript code in enterprise applications.",
      author: "David Kumar",
      date: "2024-12-20",
      category: "Programming",
      readTime: "15 min read",
      tags: ["TypeScript", "Best Practices", "Code Quality"]
    },
    {
      id: 5,
      title: "Building Accessible Web Apps",
      description: "A practical approach to creating inclusive web experiences that work for everyone, regardless of ability.",
      author: "Lisa Anderson",
      date: "2024-12-18",
      category: "Accessibility",
      readTime: "9 min read",
      tags: ["A11y", "Inclusive Design", "Web Standards"]
    }
  ];

  return (
    <div className="pt-15 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
            Articles
          </h1>
          <p className="text-purple-300/80 text-lg">
            Insights, tutorials, and stories from our community
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-gradient-to-br from-purple-950/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Category & Date */}
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-400/30">
                  {article.category}
                </span>
                <time className="text-purple-400/60 text-sm">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-purple-400/60 text-sm">•</span>
                <span className="text-purple-400/60 text-sm">{article.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-purple-100 mb-3 hover:text-purple-300 transition-colors cursor-pointer">
                {article.title}
              </h2>

              {/* Description */}
              <p className="text-purple-200/70 text-lg mb-4 leading-relaxed">
                {article.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300/80 text-xs font-medium rounded-md border border-purple-700/30"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author & Read More */}
              <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-purple-200 font-medium text-sm">{article.author}</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors duration-200 hover:shadow-lg hover:shadow-purple-500/30">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 bg-black/20 backdrop-blur-sm mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-purple-400/60">
          <p>© 2024 Articles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}