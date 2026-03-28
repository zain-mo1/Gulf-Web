import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Smartphone } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const STORAGE_KEY = "gulfwebco-install-prompt-dismissed";
const DISMISS_DURATION_DAYS = 7;

export function InstallPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    // Check if should show prompt
    const shouldShow = () => {
      // Only show on mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      if (!isMobile) return false;

      // Check if already installed
      if (window.matchMedia("(display-mode: standalone)").matches) return false;

      // Check if dismissed recently
      const dismissedAt = localStorage.getItem(STORAGE_KEY);
      if (dismissedAt) {
        const dismissedDate = new Date(parseInt(dismissedAt));
        const now = new Date();
        const daysSinceDismissed = (now.getTime() - dismissedDate.getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceDismissed < DISMISS_DURATION_DAYS) return false;
      }

      return true;
    };

    if (!shouldShow()) return;

    // Listen for install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);

      // Show popup after delay
      setTimeout(() => {
        setIsVisible(true);
      }, 4000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Listen for app installed
    const handleAppInstalled = () => {
      setIsVisible(false);
      setDeferredPrompt(null);
      // Mark as installed permanently
      localStorage.setItem(STORAGE_KEY, "installed");
    };

    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      localStorage.setItem(STORAGE_KEY, "installed");
    }

    setIsVisible(false);
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isVisible && deferredPrompt && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={handleDismiss}
          />

          {/* Bottom sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <div className="bg-card border border-border rounded-3xl p-6 shadow-2xl max-w-lg mx-auto">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 left-4 p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-heading-2 text-foreground mb-2">
                  ثبت تطبيق GulfWebCo على هاتفك
                </h2>

                {/* Description */}
                <p className="text-body text-muted-foreground mb-6">
                  احصل على تجربة أسرع وسهلة للوصول إلى الموقع في أي وقت.
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handleInstall}
                    className="w-full py-4 rounded-xl bg-gradient-primary text-white font-semibold text-body-lg hover:opacity-90 transition-opacity glow flex items-center justify-center gap-3"
                  >
                    <Download className="w-5 h-5" />
                    تثبيت التطبيق
                  </button>

                  <button
                    onClick={handleDismiss}
                    className="w-full py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
                  >
                    لاحقًا
                  </button>
                </div>

                {/* Note */}
                <p className="text-body-sm text-muted-foreground mt-4">
                  يعمل بدون تحميل من المتجر.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
