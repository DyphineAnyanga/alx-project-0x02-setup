import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
