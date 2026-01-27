import whyBacklinking from "@/content/articles/why-backlinking-and-online-content-still-matter";
import socialMedia from "@/content/articles/how-social-media-marketing-helps-small-businesses-in-india";
import delhiSmallBusinesses from "@/content/articles/how-delhi-small-businesses-use-social-media-for-growth";
import smallInfluencers from "@/content/articles/using-small-influencers-for-local-brand-growth";
import youtubeInstagram from "@/content/articles/youtube-vs-instagram-what-actually-works";
import viralReel from "@/content/articles/why-one-viral-reel-beats-twenty-average-ones";
import tenKFollowers from "@/content/articles/why-10k-followers-can-be-better-than-100k";
import youtubeEnshitification from "@/content/articles/how-youtube-enshitification-actually-works";
import consumerBehaviour from "@/content/articles/consumer-behaviour-long-form-vs-short-form-content";
import digitalMarketing from "@/content/articles/digital-marketing-evolution-in-the-age-of-ai-content";

export const allArticles = [
  whyBacklinking,
  socialMedia,
  delhiSmallBusinesses,
  smallInfluencers,
  youtubeInstagram,
  viralReel,
  tenKFollowers,
  youtubeEnshitification,
  consumerBehaviour,
  digitalMarketing
];

// For article list page
export function getArticlesMeta() {
  return allArticles.reverse().map(({ slug, title, author, date, category, readTime, excerpt }) => ({
    slug,
    title,
    author,
    date,
    category,
    readTime,
    excerpt
  }));
}

// For dynamic route
export function getArticleBySlug(slug: string) {
  return allArticles.find(article => article.slug === slug);
}
