
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { VortexAnimation } from "@/components/VortexAnimation";
import { mockArticles } from "@/lib/mock-data";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Button } from "@/components/ui/button";
import { VortexLogo } from "@/components/VortexLogo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featuredArticles = mockArticles.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden vortex-pattern">
          <VortexAnimation />
          <div className="container max-w-4xl text-center z-10 px-4">
            <div className="flex justify-center mb-4 animate-pulse-slow">
              <VortexLogo size="lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 animate-fade-in">
              <span className="text-gradient">Archivo de Conocimiento Vortex</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explora el universo del conocimiento a través de nuestra colección de artículos especializados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <Link to="/articles">
                  Explorar Artículos <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/admin">Panel de Administración</Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background -z-5"></div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-heading font-bold">Artículos Destacados</h2>
              <Button variant="link" asChild className="gap-1">
                <Link to="/articles">
                  Ver todos <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <ArticleGrid articles={featuredArticles} />
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold mb-4">Sobre el Archivo Vortex</h2>
              <p className="text-muted-foreground">
                Un repositorio digital de conocimiento en constante expansión, 
                diseñado para facilitar la exploración y el descubrimiento de información valiosa
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 rounded-lg border border-border flex flex-col items-center text-center transition-all hover:shadow-md hover:border-primary/50">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">01</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Contenido Estructurado</h3>
                <p className="text-muted-foreground">Artículos organizados en secciones claras para facilitar la comprensión y navegación</p>
              </div>
              
              <div className="p-6 rounded-lg border border-border flex flex-col items-center text-center transition-all hover:shadow-md hover:border-primary/50">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">02</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Navegación Intuitiva</h3>
                <p className="text-muted-foreground">Interfaces diseñadas para una experiencia fluida y natural al explorar el conocimiento</p>
              </div>
              
              <div className="p-6 rounded-lg border border-border flex flex-col items-center text-center transition-all hover:shadow-md hover:border-primary/50">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">03</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Estética Visual</h3>
                <p className="text-muted-foreground">Experiencia visual armónica que facilita la concentración y el aprendizaje</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
