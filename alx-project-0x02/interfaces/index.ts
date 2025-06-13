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
export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}
export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
