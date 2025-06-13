import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>SoloForge | Home</title>
      </Head>
      <Header />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to SoloForge</h1>
        <p className="text-gray-700 text-lg">Mastering Project Autonomy with Next.js, TypeScript, and Tailwind CSS</p>
      </main>
    </>
  );
}
