import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, X } from "lucide-react";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    // Show message after 10 seconds (10000ms) for a more targeted approach
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000);

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappUrl = `https://wa.me/01038150652?text=${encodeURIComponent("مرحباً جلف ويب، أود الاستفادة من خصم الـ 10% الإضافي لأول 10 عملاء.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4 pointer-events-none" dir="rtl">
      
      {/* Clean Back to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -3 }}
            className="w-10 h-10 rounded-full bg-surface-elevated text-foreground border border-border shadow-md flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all duration-300 pointer-events-auto"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Section */}
      <div className="relative pointer-events-auto">
        {/* The Icon */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 bg-white flex items-center justify-center overflow-hidden ring-2 ring-white dark:ring-card block"
          aria-label="Contact on WhatsApp"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="w-full h-full object-cover scale-110"
          />
        </motion.a>

        {/* The Message (Absolutely positioned to the left) */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className="absolute right-full mr-4 bottom-0 bg-white dark:bg-card p-3 px-4 rounded-2xl rounded-br-none shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-border/50 w-[220px]"
            >
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setShowMessage(false);
                }}
                className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shadow-sm"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-body-sm font-medium text-foreground leading-tight text-right">
                خصم إضافي 10% لأول 10 عملاء فقط! احجز مكانك الآن ⏳
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
