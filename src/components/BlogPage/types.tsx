export interface BlogPostMetaData {
  title: string;
  subtitle: string;
  bannerImage: string;
  author: string;
  dateCreated: string;
  url: string;
}

export interface BlogPost {
  blogPostMeta: BlogPostMetaData;
  content: string;
}

export interface BlogPageProps {
  id?: string;
  blogPosts: BlogPost[];
}
