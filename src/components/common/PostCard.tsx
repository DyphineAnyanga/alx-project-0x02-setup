import { PostProps } from "@/interfaces";

export default function PostCard({ userId, title, content }: PostProps) {
  return (
    <div className="border p-4 rounded-lg shadow mb-4 bg-white">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <small className="text-gray-500">User ID: {userId}</small>
    </div>
  );
}
