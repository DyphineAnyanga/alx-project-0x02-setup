import { GetStaticProps } from 'next';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
