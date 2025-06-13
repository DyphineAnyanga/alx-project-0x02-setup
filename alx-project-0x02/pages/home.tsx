import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

const HomePage = () => {
  const [posts, setPosts] = useState([
    { title: 'Welcome Post', content: 'This is a default post.' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 mb-4 rounded"
      >
        Add Post
      </button>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
