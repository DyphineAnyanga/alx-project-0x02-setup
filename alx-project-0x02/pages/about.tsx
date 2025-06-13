import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">About This Project</h1>
      <p className="mb-6">
        This project demonstrates basic routing, reusable components, and layout management using Next.js with TypeScript and Tailwind CSS.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
        <Button size="large" shape="rounded-full">Large Rounded-full</Button>
      </div>
    </div>
  );
};

export default AboutPage;
