import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-secondary-foreground/50 text-xs font-body flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent" /> by KCYM Anathadam © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
