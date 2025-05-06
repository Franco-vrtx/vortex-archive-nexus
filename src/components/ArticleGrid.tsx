
import { Article } from "@/types/article";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: Article[];
  className?: string;
}

export function ArticleGrid({ articles, className }: ArticleGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
