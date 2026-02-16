
export interface Author {
  name: string;
  title: string;
  avatar: string;
}

export interface Post {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  likesCount: number;
  commentsCount: number;
  imageUrl?: string;
}

export interface User {
  name: string;
  title: string;
  avatar: string;
  connectionsCount: number;
  viewedProfile?: number;
  impressions?: number;
}
