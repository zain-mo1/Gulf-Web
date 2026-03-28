import { motion } from "framer-motion";
import { Zap, Target, Wallet, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "تسليم سريع خلال 7 أيام",
    description: "نلتزم بجدول زمني واضح ونسلمك موقعك خلال أسبوع واحد فقط."
  },
  {
    icon: Target,
    title: "مواقع مخصصة للشركات فقط",
    description: "نركز على مواقع الشركات الاحترافية. لا متاجر. لا تطبيقات. تخصص كامل."
  },
  {
    icon: Wallet,
    title: "أسعار واضحة بدون تعقيد",
    description: "سعر ثابت ومعلن مسبقاً. لا رسوم مخفية ولا مفاجآت."
  },
  {
    icon: Headphones,
    title: "دعم واستضافة متكاملة",
    description: "استضافة سحابية سريعة ودعم فني مستمر. السنة الأولى مجاناً."
  }
];

export function Features() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-3 md:text-display-2 text-foreground mb-4">
            لماذا <span className="text-gradient">جلف ويب كو</span>؟
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            نقدم لك تجربة مختلفة في تصميم المواقع. بساطة وسرعة وجودة.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-heading-3 text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
