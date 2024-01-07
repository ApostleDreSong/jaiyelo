"use client"
import React from 'react';

const Page = () => {

  return (
      <div className="container mx-auto mt-8 p-4 bg-gray-200">
        <h1 className="text-3xl font-bold mb-4">Dummy Component</h1>
        <p className="text-gray-700">
          This is a dummy component with some placeholder content. You can replace this content
          with your actual component logic and UI.
        </p>
        <ul className="list-disc mt-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
  );
};

export default Page;