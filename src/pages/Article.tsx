import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { getArticleBySlug } from "@/data/articles";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{article.title} | مدونة جلف ويب</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.imageUrl} />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.imageUrl} />
      </Helmet>

      <Header />

      <main className="flex-1 pt-32 pb-16">
        <article className="container max-w-4xl">
          <Link 
            to="/articles"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowRight className="w-4 h-4" />
            العودة للمدونة
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-display-3 md:text-display-2 text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-10 pb-10 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <time dateTime={article.date} className="font-medium">
                  {new Date(article.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden aspect-[21/9] mb-12 shadow-md">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-2xl prose-hr:border-border"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </article>
      </main>

      {/* Internal CTA specific to article readers */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container max-w-3xl text-center">
          <h3 className="text-heading-2 text-foreground mb-4">هل تبحث عن شريك لنجاحك الرقمي؟</h3>
          <p className="text-body-lg text-muted-foreground mb-8">
            حول الأفكار التي قرأتها للتو إلى واقع ملموس مع فريق جلف ويب.
          </p>
          <a
            href={`https://wa.me/201038150652?text=${encodeURIComponent("مرحباً جلف ويب، قرأت مقالكم في المدونة وأود الاستفسار عن خدماتكم.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-semibold text-body-lg hover:opacity-90 transition-all glow"
          >
            تواصل معنا الآن للبدء
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
