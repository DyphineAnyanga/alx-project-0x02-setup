import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome to ALX Project 2 – Next.js, TypeScript, and Tailwind CSS!
        </h2>
      </main>
    </>
  );
}
