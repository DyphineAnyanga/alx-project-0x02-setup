import { UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded-lg shadow mb-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500">
        {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
}
