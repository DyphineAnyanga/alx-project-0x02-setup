import { PostProps } from '@/interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <small className="text-gray-500">Posted by User {userId}</small>
    </div>
  );
};

export default PostCard;
