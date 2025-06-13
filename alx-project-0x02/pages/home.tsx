import React from 'react';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page</h1>
      <Card title="Card One" content="This is the content of card one." />
      <Card title="Card Two" content="This is the content of card two." />
    </div>
  );
}
