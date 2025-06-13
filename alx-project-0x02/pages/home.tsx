import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <button
        onClick={() => setShowModal(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Add Post
      </button>

      {showModal && <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddPost} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
