import { getArticleBySlug } from '@/lib/articles';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if(!article){
    return notFound();
  }


  return {
    title: `${article.title} | Havocmedia`,
    description: article.subtitle,
    authors: [{ name: article.author, url: 'https://havocmedia.in' }],
    openGraph: {
      title: article.title,
      description: article.subtitle,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      url: `https://havocmedia.in/articles/${slug}`,
      siteName: 'Havocmedia',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.subtitle,
      creator: '@havocmedia',
    },
    alternates: {
      canonical: `https://havocmedia.in/articles/${slug}`,
    },
    keywords: [article.category, 'digital marketing', 'SEO', 'content strategy'],
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if(!article){
    return notFound();
  }


  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://havocmedia.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Havocmedia',
      url: 'https://havocmedia.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://havocmedia.in/logo.png',
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://havocmedia.in/articles/${slug}`,
    },
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-15 min-h-screen bg-black">
        {/* Header with Branding */}
        <header className="border-b border-purple-900/30">
          <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
            <a
              href="/articles"
              className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              aria-label="Back to articles"
            >
              ← Back to Articles
            </a>
            <a
              href="https://havocmedia.in"
              className="text-purple-300 hover:text-white font-bold text-lg transition-colors"
              aria-label="Havocmedia homepage"
            >
              Havocmedia
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

          {/* Title with proper heading hierarchy */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-purple-200 mb-8 leading-relaxed">
            {article.subtitle}
          </p>

          {/* Meta Information with structured data */}
          <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-purple-900/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-white font-medium">
                  <a
                    href="https://havocmedia.in"
                    className="hover:text-purple-300 transition-colors"
                    rel="author"
                  >
                    {article.author}
                  </a>
                </p>
                <p className="text-purple-400 text-sm">Founder, Havocmedia</p>
              </div>
            </div>
            <span className="text-purple-500" aria-hidden="true">•</span>
            <time
              className="text-purple-300"
              dateTime={article.date}
            >
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="text-purple-500" aria-hidden="true">•</span>
            <span className="text-purple-300">{article.readTime}</span>
          </div>

          {/* Article Body with semantic HTML */}
          <article className="prose prose-invert prose-lg max-w-none">
            {article.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    id={block.text.toLowerCase().replace(/\s+/g, '-')}
                    className="text-3xl font-bold text-white mt-12 mb-6 leading-tight scroll-mt-20"
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

          {/* Author Bio Section */}
          <aside className="mt-16 p-8 bg-purple-900/20 rounded-lg border border-purple-700/30">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  About {article.author}
                </h3>
                <p className="text-purple-200 mb-4">
                  Founder of <a href="https://havocmedia.in" className="text-purple-400 hover:text-purple-300 font-semibold underline">Havocmedia</a>,
                  helping businesses grow through strategic digital marketing, SEO, and content creation.
                </p>
                <a
                  href="https://havocmedia.in"
                  className="inline-block px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  Visit Havocmedia →
                </a>
              </div>
            </div>
          </aside>
        </main>

        {/* Footer with proper branding */}
        <footer className="border-t border-purple-900/30 mt-20">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://havocmedia.in"
                className="text-2xl font-bold text-purple-300 hover:text-white transition-colors"
              >
                Havocmedia
              </a>
              <p className="text-center text-purple-400 text-sm">
                Digital Marketing & Content Strategy
              </p>
              <p className="text-center text-purple-500 text-sm">
                © 2026 Havocmedia. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="https://havocmedia.in" className="text-purple-400 hover:text-purple-300 text-sm">
                  Home
                </a>
                <span className="text-purple-600">•</span>
                <a href="https://havocmedia.in/contact" className="text-purple-400 hover:text-purple-300 text-sm">
                  Contact
                </a>
                <span className="text-purple-600">•</span>
                <a href="https://havocmedia.in/services" className="text-purple-400 hover:text-purple-300 text-sm">
                  Services
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}