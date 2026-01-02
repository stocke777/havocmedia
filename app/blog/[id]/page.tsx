export default function ArticlePage() {
  // Mock article data (in real app, fetch from API/database using params)
  const article = {
    title: "The Future of Web Development",
    subtitle: "Exploring the latest trends and technologies shaping the future of web development",
    author: "Sarah Johnson",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Technology",
    content: [
      {
        type: "paragraph",
        text: "The landscape of web development is evolving at an unprecedented pace. As we move further into 2024, several key trends are emerging that promise to reshape how we build and interact with web applications."
      },
      {
        type: "heading",
        text: "The Rise of AI Integration"
      },
      {
        type: "paragraph",
        text: "Artificial intelligence is no longer just a buzzword—it's becoming an integral part of modern web applications. From personalized user experiences to intelligent code completion, AI is transforming every aspect of web development."
      },
      {
        type: "paragraph",
        text: "Developers are now leveraging large language models to generate code snippets, debug issues, and even create entire components. This shift is not about replacing developers but augmenting their capabilities, allowing them to focus on higher-level problem-solving and creative solutions."
      },
      {
        type: "heading",
        text: "Edge Computing and Performance"
      },
      {
        type: "paragraph",
        text: "Edge computing is revolutionizing how we think about application performance. By processing data closer to the end user, we're seeing dramatic improvements in load times and overall user experience."
      },
      {
        type: "paragraph",
        text: "Modern frameworks like Next.js and Remix are leading the charge with edge-first architectures. These frameworks allow developers to deploy serverless functions globally, ensuring that users anywhere in the world get the same fast, responsive experience."
      },
      {
        type: "heading",
        text: "Component-Driven Development"
      },
      {
        type: "paragraph",
        text: "The industry has fully embraced component-driven development. Tools like Storybook and design systems are becoming standard in development workflows, ensuring consistency and reusability across large-scale applications."
      },
      {
        type: "paragraph",
        text: "This approach not only improves development speed but also enhances collaboration between designers and developers, creating a more cohesive product development process."
      },
      {
        type: "heading",
        text: "Looking Ahead"
      },
      {
        type: "paragraph",
        text: "As we look to the future, it's clear that web development will continue to evolve. The key for developers is to remain adaptable, continuously learning and experimenting with new technologies while maintaining a focus on fundamental principles of good software design."
      },
      {
        type: "paragraph",
        text: "The future is bright, and the tools we have at our disposal are more powerful than ever. By embracing these changes and staying curious, we can build web experiences that are faster, more intelligent, and more accessible to everyone."
      }
    ]
  };

  return (
    <div className="pt-15 min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-purple-900/30">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
            ← Back to Articles
          </a>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="px-4 py-2 bg-purple-900/30 text-purple-300 text-sm font-medium rounded-full border border-purple-700/50">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-purple-200 mb-8 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-purple-900/30">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-white font-medium">{article.author}</p>
              <p className="text-purple-400 text-sm">Author</p>
            </div>
          </div>
          <span className="text-purple-500">•</span>
          <time className="text-purple-300">
            {new Date(article.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <span className="text-purple-500">•</span>
          <span className="text-purple-300">{article.readTime}</span>
        </div>

        {/* Article Body */}
        <article className="prose prose-invert prose-lg max-w-none">
          {article.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={index}
                  className="text-3xl font-bold text-white mt-12 mb-6 leading-tight"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <p
                key={index}
                className="text-lg text-gray-200 mb-6 leading-relaxed"
                style={{ lineHeight: '1.8' }}
              >
                {block.text}
              </p>
            );
          })}
        </article>

        {/* Footer Actions */}
        <div className="mt-16 pt-8 border-t border-purple-900/30">
          <div className="flex items-center justify-between">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition-colors duration-200">
              Share Article
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white font-medium rounded-lg transition-all duration-200">
              Save for Later
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/30 mt-20">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <p className="text-center text-purple-500 text-sm">
            © 2024 Articles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}