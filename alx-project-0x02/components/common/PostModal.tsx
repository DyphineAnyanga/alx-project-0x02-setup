import React, { useState } from 'react';

interface PostModalProps {
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Create a Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Content"
            className="w-full p-2 border mb-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
              Post
            </button>
            <button type="button" onClick={onClose} className="text-red-500">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
