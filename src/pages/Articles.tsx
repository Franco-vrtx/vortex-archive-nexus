
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { mockArticles } from "@/lib/mock-data";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Extract all tags from articles for filter
  const allTags = Array.from(new Set(mockArticles.flatMap(article => article.tags)));
  
  // Filter articles based on search term
  const filteredArticles = mockArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter by tag
  const filterByTag = (tag: string) => {
    setSearchTerm(tag);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl px-4">
          <h1 className="text-4xl font-heading font-bold mb-2">Artículos</h1>
          <p className="text-muted-foreground mb-8">
            Explora nuestra colección de artículos especializados
          </p>
          
          <div className="mb-8">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                className="pl-10"
                placeholder="Buscar por título, contenido o etiqueta..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground pt-1">Filtrar por etiqueta:</span>
              {allTags.map(tag => (
                <Badge 
                  key={tag} 
                  variant={searchTerm === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => filterByTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {searchTerm && (
                <Badge 
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => setSearchTerm("")}
                >
                  Limpiar filtros
                </Badge>
              )}
            </div>
          </div>
          
          {filteredArticles.length > 0 ? (
            <ArticleGrid articles={filteredArticles} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No se encontraron artículos</h3>
              <p className="text-muted-foreground">
                Intenta con otros términos de búsqueda o etiquetas
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Articles;
