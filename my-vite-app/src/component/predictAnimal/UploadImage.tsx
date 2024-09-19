import React, { useState } from 'react';

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [preview, setPreview] = useState<string | null>(null); // For image preview

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreview(URL.createObjectURL(uploadedFile)); // Create preview URL
    }
  };

  // Handle image URL input
  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    setPreview(e.target.value); // Set preview to image URL
  };

  // Example function to simulate submitting
  const handleSubmit = () => {
    if (file) {
      console.log("Uploaded file:", file);
      // You can handle the file here (e.g., send it to a backend or process)
    }

    if (imageUrl) {
      console.log("Image URL:", imageUrl);
      // You can handle the image URL here
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Upload a Picture or Paste an Image URL</h2>

      {/* File upload box */}
      <div className="mb-4">
        <label className="block text-lg mb-2">Upload Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="border p-2"
        />
        {file && <p>Selected file: {file.name}</p>}
      </div>

      {/* Image URL input */}
      <div className="mb-4">
        <label className="block text-lg mb-2">Or Paste an Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
          placeholder="Enter image URL"
          className="border p-2 w-full"
        />
      </div>

      {/* Display the image preview */}
      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="max-w-full h-auto border p-2" />
        </div>
      )}

      {/* Submit button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default UploadImage;
