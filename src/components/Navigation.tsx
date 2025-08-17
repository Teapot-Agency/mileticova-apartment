import { Button } from "@/components/ui/button";
import { Home, Search, Heart, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="w-full bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Home className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">ApartmentHub</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Browse
          </a>
          <a href="/search" className="text-foreground hover:text-primary transition-colors">
            Advanced Search
          </a>
          <a href="/favorites" className="text-foreground hover:text-primary transition-colors">
            Saved
          </a>
          <a href="/help" className="text-foreground hover:text-primary transition-colors">
            Help
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            List Your Property
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;