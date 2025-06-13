import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <div className="flex gap-4 flex-wrap">
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </div>
  );
};

export default AboutPage;
