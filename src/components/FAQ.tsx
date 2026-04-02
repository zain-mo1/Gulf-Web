import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "هل السعر يشمل الاستضافة؟",
    answer: "نعم، السنة الأولى من الاستضافة مجانية مع أي باقة تصميم. بعد ذلك، رسوم التجديد السنوي 500 ريال تشمل الاستضافة والنطاق وشهادة SSL والدعم الفني."
  },
  {
    question: "متى يتم تسليم الموقع؟",
    answer: "يتم تسليم الموقع خلال 5-7 أيام عمل للباقة الأولى، و 7-10 أيام للباقة الثنائية اللغة. نلتزم بالمواعيد المحددة."
  },
  {
    question: "هل يوجد دعم بعد التسليم؟",
    answer: "نعم، نوفر دعم فني مجاني لمدة شهر بعد التسليم. يشمل ذلك المساعدة في تعديل المحتوى وحل أي مشاكل تقنية."
  },
  {
    question: "هل يمكن إضافة صفحات لاحقًا؟",
    answer: "بالتأكيد، يمكن إضافة صفحات جديدة في أي وقت. نوفر خدمة إضافة الصفحات بأسعار تنافسية حسب متطلبات كل صفحة."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 surface">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-3 md:text-display-2 text-foreground mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-right text-heading-3 text-foreground hover:text-primary hover:no-underline py-6 gap-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
