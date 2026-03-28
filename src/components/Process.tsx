import { motion } from "framer-motion";
import { FileText, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "جمع المتطلبات",
    description: "نفهم احتياجاتك وأهدافك ونحدد معاً رؤية موقعك"
  },
  {
    number: "02",
    icon: Palette,
    title: "التصميم",
    description: "نصمم واجهة عصرية تعكس هوية شركتك"
  },
  {
    number: "03",
    icon: Code,
    title: "التطوير",
    description: "نحول التصميم إلى موقع فعلي بأحدث التقنيات"
  },
  {
    number: "04",
    icon: Rocket,
    title: "الإطلاق",
    description: "نطلق موقعك ونوفر لك الدعم والاستضافة"
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-display-3 md:text-display-2 text-foreground mb-4">
            آلية العمل
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            أربع خطوات بسيطة للحصول على موقعك الاحترافي
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 right-[39px] md:right-1/2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute right-[32px] md:right-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 1 ? "md:text-left" : "md:text-right"} pr-20 md:pr-0`}>
                  <div className={`inline-block ${index % 2 === 1 ? "md:mr-12" : "md:ml-12"}`}>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-body-sm font-bold text-primary">
                        {step.number}
                      </span>
                      <h3 className="text-heading-2 text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-body-lg text-muted-foreground max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon - hidden on mobile, shown on desktop opposite side */}
                <div className={`hidden md:flex flex-1 ${index % 2 === 1 ? "justify-end" : "justify-start"}`}>
                  <div className={`${index % 2 === 1 ? "ml-12" : "mr-12"}`}>
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center group hover:border-primary/50 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
