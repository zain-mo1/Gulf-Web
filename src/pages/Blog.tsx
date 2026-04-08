import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { articles } from "@/data/articles";
import { Calendar, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>المدونة | جلف ويب لتصميم المواقع</title>
        <meta name="description" content="مقالات وأدلة حصرية عن تصميم المواقع، التجارة الإلكترونية، وتحسين محركات البحث للشركات في السعودية والخليج." />
      </Helmet>

      <Header />

      <main className="flex-1 pt-32 pb-16">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto mb-16">
            <h1 className="text-display-3 text-foreground mb-4">المدونة</h1>
            <p className="text-body-lg text-muted-foreground">
              مكتبة من المقالات والأدلة لمساعدتك في بناء وتطوير الوجود الرقمي لشركتك.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-surface border border-border rounded-3xl overflow-hidden hover:border-primary/30 transition-all flex flex-col h-full shadow-sm hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {article.tags.slice(0, 1).map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-background/90 text-foreground backdrop-blur-sm border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>
                  
                  <h2 className="text-heading-3 text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link to={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-body text-muted-foreground line-clamp-3 mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <Link 
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-auto"
                  >
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
