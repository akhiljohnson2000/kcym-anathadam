import Link from "next/link";
import { Church, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold">KCYM Anathadam</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm font-body leading-relaxed">
              Kerala Catholic Youth Movement, Anathadam Unit. Empowering youth through faith, fellowship, and service.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/story", label: "Our Story" },
                { href: "/church", label: "St. Thomas Church" },
                { href: "/initiatives", label: "Initiatives" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <div className="text-secondary-foreground/70 text-sm font-body space-y-2">
              <p>St. Thomas Church, Anathadam</p>
              <p>Kerala, India</p>
              <p>kcym.anathadam@email.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="font-heading italic text-primary text-sm md:text-base mb-3">
            &quot;Let no one despise your youth.&quot; – 1 Timothy 4:12
          </p>
          <p className="text-secondary-foreground/50 text-xs font-body flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent" /> by KCYM Anathadam © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
