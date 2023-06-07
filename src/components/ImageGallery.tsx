"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [displayImage, setDisplayImage] = useState(images[0]);
  return (
    <div className="w-full overflow-x-auto flex-col-reverse lg:flex-row  flex items-stretch gap-8">
      <div className="flex flex-row  lg:flex-col gap-4">
        {images?.map((imgSrc) => (
          <div key={imgSrc} className="w-[100px] h-[100px] relative">
            <Image
              onMouseEnter={() => {
                setDisplayImage(imgSrc);
              }}
              src={imgSrc || ""}
              alt="image"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="h-96 lg:h-[512px] lg:flex-1 w-full relative">
        <Image
          src={displayImage}
          alt="display-image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
