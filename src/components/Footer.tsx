import { Mail, MessageCircle, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border surface">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-32">
                <img 
                  src="/gulf-dark-logo.svg" 
                  alt="جلف ويب" 
                  className="w-full h-auto dark:hidden"
                />
                <img 
                  src="/gulf-light-logo.svg" 
                  alt="جلف ويب" 
                  className="w-full h-auto hidden dark:block"
                />
              </div>
            </a>
            <p className="text-body text-muted-foreground max-w-xs">
              شركة متخصصة في تصميم وتطوير مواقع الشركات الاحترافية في منطقة الخليج العربي.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading-3 text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#process" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  آلية العمل
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  الأسعار
                </a>
              </li>
              <li>
                <a href="#contact" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-heading-3 text-foreground mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:info@gulfwebco.com" className="text-body text-muted-foreground hover:text-primary transition-colors">
                  info@gulfwebco.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <a href="https://wa.me/01500183393" target="_blank" rel="noopener noreferrer" className="text-body text-muted-foreground hover:text-primary transition-colors font-medium text-right" dir="ltr">
                  تواصل عبر واتساب
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-body text-muted-foreground">
                  نعمل اونلاين لخدمة اكبر عدد من عملاؤنا
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-body-sm text-muted-foreground">
            © {currentYear} جلف ويب. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
