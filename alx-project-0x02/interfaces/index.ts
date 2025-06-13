// Common interfaces will be defined here

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}
export interface CardProps {
  title: string;
  content: string;
}
