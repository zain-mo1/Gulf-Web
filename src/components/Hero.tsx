import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useTrackClick } from "@/hooks/use-analytics";

export function Hero() {
  const trackQuoteClick = useTrackClick("CTA", "اطلب عرض سعر (Hero)");
  const trackServicesClick = useTrackClick("CTA", "شاهد خدماتنا (Hero)");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-24 md:pb-32">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 text-center px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-body-sm text-primary font-medium">
            تصميم مواقع احترافية للشركات
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display-2 md:text-display-1 text-foreground mb-6 max-w-4xl mx-auto"
        >
          موقع شركتك الاحترافي
          <br />
          <span className="text-gradient">يبدأ من هنا</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          نصمم ونطوّر مواقع شركات عصرية تساعدك على الظهور بثقة أمام عملائك.
          <br />
          تسليم سريع. أسعار واضحة. جودة عالية.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/01038150652?text=${encodeURIComponent("مرحباً، أود طلب عرض سعر لتصميم موقع لشركتي.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackQuoteClick}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-semibold text-body-lg hover:opacity-90 transition-all glow"
          >
            اطلب عرض سعر
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#services"
            onClick={trackServicesClick}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border bg-surface-elevated text-foreground font-medium text-body-lg hover:bg-secondary transition-colors"
          >
            شاهد خدماتنا
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          <div className="flex flex-col items-center justify-center gap-1 px-2">
            <div className="text-display-3 text-gradient font-bold">800</div>
            <div className="text-body-sm text-muted-foreground">ريال فقط</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-2 border-x border-border">
            <div className="text-display-3 text-gradient font-bold">7</div>
            <div className="text-body-sm text-muted-foreground">أيام عمل</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-2">
            <div className="text-display-3 text-gradient font-bold">100%</div>
            <div className="text-body-sm text-muted-foreground">رضا العملاء</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
