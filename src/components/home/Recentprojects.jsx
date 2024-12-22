import React from "react";

const RecentProjects = () => {
  const images = [
    "src/assets/07/Staircase-650x650.jpg",
    "src/assets/07/Bathroom-2-650x650.jpg",
    "src/assets/07/Corridor-650x650.jpg",
    "src/assets/07/Floor-650x650.jpg",
    "src/assets/07/Kitchen-650x650.jpg",
    "src/assets/07/Room-650x650.jpg",
    "src/assets/07/Garden-650x650.jpg",
    "src/assets/07/Room-1-650x650.jpg",
    "src/assets/07/Garage-Conversion-650x650.jpg",
    "src/assets/07/Kitchen-2-650x650.jpg",
    "src/assets/07/Staircase-650x650.jpg",
    "src/assets/07/Bathroom-2-650x650.jpg",
  ];

  return (
    <div className="flex justify-center bg-white">
      <div className="w-full max-w-6xl text-center">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-500 uppercase tracking-wide">Detail Oriented | High Standards</p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">Recent Projects</h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
