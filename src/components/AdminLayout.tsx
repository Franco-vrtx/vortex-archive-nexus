
import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { VortexLogo } from "./VortexLogo";
import { Button } from "@/components/ui/button";
import { FileText, Home, FolderPlus, Settings } from "lucide-react";

export function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link to="/admin" className="flex items-center space-x-2">
              <VortexLogo />
              <span className="font-heading font-bold text-xl hidden sm:inline-block">
                Vortex Admin
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/" className="flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  <span>Sitio público</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        <aside className="w-64 border-r border-border/40 hidden md:block">
          <div className="flex h-full flex-col p-4">
            <nav className="flex-1 space-y-1">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/admin">
                  <Home className="h-4 w-4 mr-2" />
                  <span>Dashboard</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/admin/articles">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Artículos</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/admin/categories">
                  <FolderPlus className="h-4 w-4 mr-2" />
                  <span>Categorías</span>
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link to="/admin/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Configuración</span>
                </Link>
              </Button>
            </nav>
          </div>
        </aside>
        
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
