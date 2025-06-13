import { GetStaticProps } from 'next';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center">Users</h1>
      <div className="grid gap-4 max-w-4xl mx-auto">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
