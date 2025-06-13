'use client';

import { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => {
        const formattedPosts = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
      });
  }, []);

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
