
export interface ArticleSection {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  categoryId?: string;
  sections: ArticleSection[];
}
