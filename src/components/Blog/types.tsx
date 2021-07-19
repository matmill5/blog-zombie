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
  content?: string;
}

export interface BlogProps {
  id?: string;
  blogPosts: BlogPost[];
}
