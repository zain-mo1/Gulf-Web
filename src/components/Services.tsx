import { motion } from "framer-motion";
import { Monitor, Code2, Users, Server } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "تصميم مواقع شركات",
    description: "تصاميم عصرية ومخصصة تعكس هوية شركتك وتجذب عملاءك المستهدفين."
  },
  {
    icon: Code2,
    title: "تطوير واجهات حديثة",
    description: "واجهات سريعة ومتجاوبة مبنية بأحدث التقنيات لضمان أفضل أداء."
  },
  {
    icon: Users,
    title: "تحسين تجربة المستخدم",
    description: "نصمم تجربة سلسة تجعل زوار موقعك يتحولون إلى عملاء."
  },
  {
    icon: Server,
    title: "استضافة ودعم فني",
    description: "استضافة سحابية آمنة ودعم فني متواصل لضمان استمرارية موقعك."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-3 md:text-display-2 text-foreground mb-4">
            خدماتنا
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            خدمات متكاملة لبناء موقع شركتك من الفكرة إلى الإطلاق
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Icon glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-heading-3 text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
