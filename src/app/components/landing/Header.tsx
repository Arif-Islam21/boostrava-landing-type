import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BR</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Boost RAVA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#advertisers"
              className="text-foreground hover:text-primary transition-colors"
            >
              For Advertisers
            </a>
            <a
              href="#publishers"
              className="text-foreground hover:text-primary transition-colors"
            >
              For Publishers
            </a>
            <a
              href="#case-studies"
              className="text-foreground hover:text-primary transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#support"
              className="text-foreground hover:text-primary transition-colors"
            >
              Support
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero" size="lg">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#advertisers"
                className="text-foreground hover:text-primary transition-colors"
              >
                For Advertisers
              </a>
              <a
                href="#publishers"
                className="text-foreground hover:text-primary transition-colors"
              >
                For Publishers
              </a>
              <a
                href="#case-studies"
                className="text-foreground hover:text-primary transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#support"
                className="text-foreground hover:text-primary transition-colors"
              >
                Support
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost">Sign In</Button>
                <Button variant="hero">Request Demo</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
