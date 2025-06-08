import { ButtonProps } from "@/interfaces";
import React from "react";

export default function Button({ size, shape, children }: ButtonProps) {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all`}>
      {children}
    </button>
  );
}
