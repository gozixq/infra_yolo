import React from 'react';
import UploadImage from './component/predictAnimal/UploadImage';
const App = () => {
  return (
    <div>
      <h1 className="text-red-500">Hello, Vite with Tailwind!</h1> {/* Correct Tailwind class */}
      <p className="text-gray-600">Welcome to the app.</p>
      <UploadImage />
    </div>
  );
};

export default App;

