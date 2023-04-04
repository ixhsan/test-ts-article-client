interface sourceType {
    name: string
    id: string
}

export interface ArticleType {
    title?: string;
    source?: sourceType;
    author?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
  }
