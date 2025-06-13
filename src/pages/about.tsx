import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  return (
    <>
      <Header />
      <h1 className="text-2xl mt-4">About Page</h1>
      <div className="flex gap-4 mt-4">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </>
  );
}
