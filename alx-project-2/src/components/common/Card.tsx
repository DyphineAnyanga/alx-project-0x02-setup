import { CardProps } from "../../../interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", margin: "1rem 0" }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}
