
import { Article } from "@/types/article";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all hover:border-primary/50 hover:shadow-md">
      <CardHeader className="p-0">
        {article.coverImage ? (
          <div className="h-48 overflow-hidden">
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <span className="text-4xl font-heading font-bold text-primary/50">V</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-heading font-bold text-xl line-clamp-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex gap-1 flex-wrap">
          {article.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-1">
              {tag}
            </Badge>
          ))}
          {article.tags.length > 2 && (
            <Badge variant="outline">+{article.tags.length - 2}</Badge>
          )}
        </div>
        <Link 
          to={`/articles/${article.id}`} 
          className="text-primary hover:text-primary/80 flex items-center font-medium"
        >
          Ver más <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}
