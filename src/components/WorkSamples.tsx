import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "موقع طبي",
    image: "https://xtratheme.com/wp-content/uploads/2024/07/medical-2-1-300x249.jpg"
  },
  {
    title: "موقع شركة مقاولات",
    image: "https://xtratheme.com/wp-content/uploads/2021/07/building.jpg"
  },
  {
    title: "موقع صناعي",
    image: "https://xtratheme.com/wp-content/uploads/2021/07/industrial.jpg"
  },
  {
    title: "موقع شركة تقنية",
    image: "https://nomumarketing.com/static/media/Website1.5d1ec4159bf08a432f08.jpg"
  },
  {
    title: "موقع متجر للكتب",
    image: "https://nomumarketing.com/static/media/Website3.80275ab9a24de71f67df.jpg"
  },
  {
    title: "موقع خدمات",
    image: "https://nomumarketing.com/static/media/Website4.71f26a8b6a2e08cffbb8.jpg"
  },
  {
    title: "موقع للحدائق والبستلة",
    image: "https://nomumarketing.com/static/media/Website6.1a7ea6ab1f6578b9a9a5.jpg"
  },
  {
    title: "موقع مكتب محاماة",
    image: "https://xtratheme.com/wp-content/uploads/2021/07/lawyers.jpg"
  },
  {
    title: "موقع لشركة تأمين",
    image: "https://xtratheme.com/wp-content/uploads/2021/08/insurance.jpg"
  }
];

export function WorkSamples() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-3 md:text-display-2 text-foreground mb-4">
            نماذج من أعمالنا
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-xl mx-auto">
            نماذج توضيحية لأسلوب التصميم وجودة التنفيذ.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-mr-4 md:-mr-6">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pr-4 md:pr-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group">
                    {/* Browser frame */}
                    <div className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      {/* Browser header */}
                      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                          <div className="w-3 h-3 rounded-full bg-green-400/80" />
                        </div>
                        <div className="flex-1 mx-2">
                          <div className="h-6 rounded-md bg-background/50 border border-border/50" />
                        </div>
                      </div>

                      {/* Image container - 16:9 aspect ratio */}
                      <div className="relative aspect-video overflow-hidden bg-secondary">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Title */}
                      <div className="p-4 text-center">
                        <h3 className="text-heading-3 text-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious
                variant="outline"
                className="static translate-y-0 h-12 w-12 rounded-xl border-border bg-card hover:bg-secondary hover:border-primary/30"
              >
                <ChevronRight className="h-5 w-5" />
              </CarouselPrevious>
              <CarouselNext
                variant="outline"
                className="static translate-y-0 h-12 w-12 rounded-xl border-border bg-card hover:bg-secondary hover:border-primary/30"
              >
                <ChevronLeft className="h-5 w-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={`https://wa.me/201038150652?text=${encodeURIComponent("مرحباً، أود الاستفسار عن تفاصيل تصميم موقع مشابه لأعمالكم السابقة.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-primary text-white font-semibold text-body-lg hover:opacity-90 transition-all glow"
          >
            اطلب موقع مشابه
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
