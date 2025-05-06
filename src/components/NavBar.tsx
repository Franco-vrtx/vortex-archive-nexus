
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { VortexLogo } from "./VortexLogo";
import { Button } from "@/components/ui/button";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <VortexLogo />
            <span className="hidden font-heading font-bold text-xl sm:inline-block">
              Vortex Archive
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link to="/">Inicio</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/articles">Artículos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/admin">Admin</Link>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
