import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-3 md:text-display-2 text-foreground mb-6">
            جاهز تبدأ موقع شركتك؟
          </h2>
          <p className="text-body-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            تواصل معنا اليوم واحصل على عرض سعر مجاني. سنساعدك في بناء حضورك الرقمي بأفضل جودة وأسرع وقت.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/201098098418?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدماتكم لإنشاء موقع إلكتروني.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-semibold text-body-lg hover:opacity-90 transition-all glow"
            >
              تواصل عبر واتساب
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="mailto:info@gulfwebco.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-border bg-surface-elevated text-foreground font-medium text-body-lg hover:bg-secondary transition-colors"
            >
              راسلنا بالبريد
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
