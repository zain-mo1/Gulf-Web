import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, Monitor, CheckCircle2, Wifi, Zap, Shield, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePageTracking } from "@/hooks/use-analytics";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  
  usePageTracking();

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Listen for app installed
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const features = [
    {
      icon: Zap,
      title: "سرعة فائقة",
      description: "تحميل فوري بدون انتظار"
    },
    {
      icon: Wifi,
      title: "يعمل بدون إنترنت",
      description: "تصفح حتى بدون اتصال"
    },
    {
      icon: Shield,
      title: "آمن وموثوق",
      description: "تحديثات تلقائية مستمرة"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-primary mb-6 shadow-lg">
              <Download className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-display-3 md:text-display-2 text-foreground mb-4">
              ثبّت التطبيق على جهازك
            </h1>
            <p className="text-body-lg text-muted-foreground">
              احصل على تجربة أسرع وأفضل بتثبيت جلف ويب كو كتطبيق على جهازك
            </p>
          </motion.div>

          {/* Install Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto mb-16"
          >
            <div className="p-8 rounded-3xl border border-border bg-card shadow-xl">
              {isInstalled ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500/10 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-heading-2 text-foreground mb-2">
                    تم التثبيت بنجاح!
                  </h2>
                  <p className="text-body text-muted-foreground mb-6">
                    التطبيق مثبت على جهازك ويمكنك فتحه من الشاشة الرئيسية
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    العودة للرئيسية
                    <ArrowLeft className="w-5 h-5" />
                  </a>
                </div>
              ) : isIOS ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-heading-2 text-foreground mb-4">
                    التثبيت على iPhone/iPad
                  </h2>
                  <div className="text-right space-y-4 mb-6">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        1
                      </span>
                      <div>
                        <p className="text-body font-medium text-foreground">
                          اضغط على أيقونة المشاركة
                        </p>
                        <p className="text-body-sm text-muted-foreground">
                          في أسفل الشاشة (Safari)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        2
                      </span>
                      <div>
                        <p className="text-body font-medium text-foreground">
                          اختر "إضافة إلى الشاشة الرئيسية"
                        </p>
                        <p className="text-body-sm text-muted-foreground">
                          Add to Home Screen
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        3
                      </span>
                      <div>
                        <p className="text-body font-medium text-foreground">
                          اضغط "إضافة"
                        </p>
                        <p className="text-body-sm text-muted-foreground">
                          سيظهر التطبيق على شاشتك الرئيسية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : deferredPrompt ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <Monitor className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-heading-2 text-foreground mb-2">
                    جاهز للتثبيت
                  </h2>
                  <p className="text-body text-muted-foreground mb-6">
                    اضغط الزر أدناه لتثبيت التطبيق على جهازك
                  </p>
                  <button
                    onClick={handleInstall}
                    className="w-full py-4 rounded-xl bg-gradient-primary text-white font-semibold text-body-lg hover:opacity-90 transition-opacity glow flex items-center justify-center gap-3"
                  >
                    <Download className="w-6 h-6" />
                    تثبيت التطبيق
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4">
                    <Monitor className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-heading-2 text-foreground mb-2">
                    التثبيت غير متاح حالياً
                  </h2>
                  <p className="text-body text-muted-foreground mb-4">
                    يمكنك تثبيت التطبيق من خلال قائمة المتصفح
                  </p>
                  <p className="text-body-sm text-muted-foreground">
                    Chrome: القائمة ← تثبيت التطبيق
                    <br />
                    Edge: القائمة ← التطبيقات ← تثبيت
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-2xl border border-border bg-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-heading-3 text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Install;
