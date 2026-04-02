import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "لغة واحدة",
    price: "800",
    period: "ريال",
    description: "موقع احترافي بلغة واحدة",
    features: [
      "تصميم عصري مخصص",
      "متجاوب مع جميع الأجهزة",
      "سرعة تحميل عالية",
      "شهادة SSL مجانية",
      "دعم فني لمدة شهر",
      "تسليم خلال 5-7 أيام"
    ],
    popular: false
  },
  {
    name: "لغتين",
    price: "1200",
    period: "ريال",
    description: "موقع بالعربية والإنجليزية",
    features: [
      "كل مميزات الباقة الأولى",
      "نسخة عربية + إنجليزية",
      "تبديل سلس بين اللغات",
      "تحسين محركات البحث",
      "استضافة السنة الأولى مجاناً",
      "تسليم خلال 7-10 أيام"
    ],
    popular: true
  },
  {
    name: "التجديد السنوي",
    price: "500",
    period: "ريال / سنة",
    description: "استضافة ودعم مستمر",
    features: [
      "استضافة سحابية سريعة",
      "تجديد النطاق",
      "شهادة SSL",
      "نسخ احتياطي دوري",
      "دعم فني متواصل",
      "تحديثات أمنية"
    ],
    popular: false
  }
];

const getWhatsAppUrl = (planName: string) => {
  const message = `مرحباً، أود الاستفسار عن تفاصيل باقة "${planName}" لتصميم موقعي.`;
  return `https://wa.me/01500183393?text=${encodeURIComponent(message)}`;
};

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 md:py-32 surface">
      <div className="container px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-display-3 md:text-display-2 text-foreground mb-3 sm:mb-4">
            أسعار واضحة
          </h2>
          <p className="text-body sm:text-body-lg text-muted-foreground max-w-xl mx-auto">
            بدون رسوم مخفية. السعر الذي تراه هو السعر النهائي.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-5 sm:p-8 rounded-2xl border transition-all duration-300 ${plan.popular
                ? "border-primary bg-card shadow-xl shadow-primary/10 lg:scale-105"
                : "border-border bg-card hover:border-primary/30"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 right-1/2 translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-gradient-primary text-white text-xs sm:text-body-sm font-medium flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                  الأكثر طلباً
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-heading-2 text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-body-sm text-muted-foreground mb-3 sm:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl sm:text-display-2 text-foreground font-bold">
                    {plan.price}
                  </span>
                  <span className="text-sm sm:text-body text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                    </div>
                    <span className="text-sm sm:text-body text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppUrl(plan.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-2.5 sm:py-3 rounded-xl text-center text-sm sm:text-base font-medium transition-all ${plan.popular
                  ? "bg-gradient-primary text-white hover:opacity-90 glow"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
              >
                اطلب الآن
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs sm:text-body-sm text-muted-foreground mt-6 sm:mt-8"
        >
          * السنة الأولى من الاستضافة مجانية مع أي باقة تصميم
        </motion.p>
      </div>
    </section>
  );
}
