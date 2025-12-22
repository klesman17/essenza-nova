"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div>
      <img
        src={activeImage}
        alt={name}
        className="w-full h-[420px] object-cover rounded-3xl mb-6"
      />

      <div className="flex gap-4">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setActiveImage(img)}
            className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition ${
              activeImage === img
                ? "ring-2 ring-green-700"
                : "opacity-60 hover:opacity-100"
            }`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}
