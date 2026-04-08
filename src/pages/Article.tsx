import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getArticleBySlug } from "@/data/articles";
import { Calendar, User, ArrowRight, Clock, Twitter, Send, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-background flex flex-col font-arabic">
      <Helmet>
        <title>{article.title} | מדونة جلف ويب</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.imageUrl} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.imageUrl} />
      </Helmet>

      <Header />

      <main className="flex-1 pt-32 pb-16 relative">
        <article className="container max-w-6xl">
          {/* Back Button */}
          <Link 
            to="/articles"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium bg-surface px-4 py-2 rounded-xl border border-border"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للمقالات
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Content Area */}
            <motion.div 
              className="lg:col-span-8 lg:col-start-1 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="mb-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-display-3 md:text-display-2 text-foreground mb-6 leading-tight font-bold">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground pb-8 border-b border-border">
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-xl border border-border">
                    <User className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-xl border border-border">
                    <Calendar className="w-4 h-4 text-primary" />
                    <time dateTime={article.date} className="font-medium text-sm">
                      {new Date(article.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-xl border border-border">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm">{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Cover Image */}
              <div className="rounded-[2rem] overflow-hidden aspect-[21/10] mb-12 shadow-2xl relative group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={article.imageUrl} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Rich Content */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-p:text-body-lg prose-p:leading-relaxed prose-p:text-muted-foreground
                  prose-headings:text-foreground prose-headings:font-bold 
                  prose-h2:text-heading-1 prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-heading-2 prose-h3:mt-8 prose-h3:mb-4
                  prose-a:text-primary hover:prose-a:text-primary/80 
                  prose-img:rounded-3xl prose-img:shadow-xl
                  prose-ul:list-none prose-ul:pl-0 prose-ul:pr-0
                  prose-li:relative prose-li:pr-6 prose-li:mb-2
                  before:prose-li:absolute before:prose-li:right-0 before:prose-li:top-3 before:prose-li:w-2 before:prose-li:h-2 before:prose-li:bg-primary before:prose-li:rounded-full"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-3 lg:col-start-10 order-1 lg:order-2 lg:sticky lg:top-32">
              <div className="bg-surface border border-border rounded-3xl p-6 shadow-sm">
                <h4 className="text-heading-3 text-foreground mb-6 flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary" />
                  شارك المقال
                </h4>
                
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full p-4 rounded-xl border border-border hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 transition-colors group"
                  >
                    <Twitter className="w-5 h-5" />
                    <span className="font-medium">شارك على تويتر (X)</span>
                  </a>
                  
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(article.title + " - " + currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full p-4 rounded-xl border border-border hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30 transition-colors group"
                  >
                    <Send className="w-5 h-5" />
                    <span className="font-medium">شارك على واتساب</span>
                  </a>
                </div>

                <hr className="my-8 border-border" />

                <div className="text-center">
                  <h4 className="font-bold text-foreground mb-2">استشارة مجانية</h4>
                  <p className="text-sm text-muted-foreground mb-4">احصل على استشارة تقنية لمشروعك بناءً على هذا المقال.</p>
                  <a
                    href="https://wa.me/201038150652?text=مرحباً، أود استشارة حول برمجة موقعي."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex justify-center items-center gap-2 bg-gradient-primary text-white py-3 rounded-xl font-medium hover:opacity-90 glow transition-all"
                  >
                    تواصل معنا
                  </a>
                </div>
              </div>
            </div>

          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
