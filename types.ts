export interface IPost {
  id: string;
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
}

export interface IPostDetails {
  createdAt: string;
  title: string;
  preview: string;
  image: string;
  description: string;
  id: string;
}
