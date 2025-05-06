
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { mockArticles } from "@/lib/mock-data";
import { Article, ArticleSection } from "@/types/article";
import { SectionNav } from "@/components/SectionNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [prevArticle, setPrevArticle] = useState<Article | null>(null);
  const [nextArticle, setNextArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Find article
    const foundArticle = mockArticles.find(a => a.id === id) || null;
    setArticle(foundArticle);
    
    if (foundArticle && foundArticle.sections.length > 0) {
      // Set first section as active
      setActiveSection(foundArticle.sections[0].id);
    }
    
    // Find prev and next articles
    if (foundArticle) {
      const currentIndex = mockArticles.findIndex(a => a.id === id);
      setPrevArticle(currentIndex > 0 ? mockArticles[currentIndex - 1] : null);
      setNextArticle(currentIndex < mockArticles.length - 1 ? mockArticles[currentIndex + 1] : null);
    }
  }, [id]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(`section-${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 py-12 container flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">Artículo no encontrado</h2>
            <p className="text-muted-foreground mb-4">
              El artículo que buscas no existe o ha sido eliminado.
            </p>
            <Button asChild>
              <Link to="/articles">Volver a Artículos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl px-4">
          {/* Article Header */}
          <div className="mb-8">
            <Link to="/articles" className="text-primary hover:text-primary/80 inline-flex items-center mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> Volver a Artículos
            </Link>
            
            {article.coverImage && (
              <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-6">
                <img 
                  src={article.coverImage} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <p className="text-xl text-muted-foreground">
              {article.excerpt}
            </p>
          </div>
          
          {/* Content with Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-10">
              {article.sections.map((section) => (
                <section 
                  key={section.id} 
                  id={`section-${section.id}`}
                  className="prose prose-lg dark:prose-invert max-w-none"
                >
                  <ReactMarkdown>
                    {section.content}
                  </ReactMarkdown>
                </section>
              ))}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <SectionNav 
                  sections={article.sections} 
                  activeSection={activeSection}
                  onSectionChange={scrollToSection} 
                />
              </div>
            </div>
          </div>
          
          {/* Navigation between articles */}
          <div className="border-t border-border/40 mt-12 pt-8 grid grid-cols-2 gap-4">
            <div>
              {prevArticle && (
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to={`/articles/${prevArticle.id}`} className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground">Artículo Anterior</div>
                      <div className="line-clamp-1">{prevArticle.title}</div>
                    </div>
                  </Link>
                </Button>
              )}
            </div>
            <div>
              {nextArticle && (
                <Button variant="outline" className="w-full justify-end" asChild>
                  <Link to={`/articles/${nextArticle.id}`} className="flex items-center">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Artículo Siguiente</div>
                      <div className="line-clamp-1">{nextArticle.title}</div>
                    </div>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
