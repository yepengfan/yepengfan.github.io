import { ProductImagesProps } from "../types";
import { useState } from "react";

export default function ProductImages({ images }: ProductImagesProps) {
  const [mainImage, setMainImage] = useState(images[0].image_url);
  const [animationClass, setAnimationClass] = useState("");

  const handleImageChange = (newImageUrl: string) => {
    if (newImageUrl !== mainImage) {
      setAnimationClass("image-exit");

      setTimeout(() => {
        setMainImage(newImageUrl);
        setAnimationClass("image-enter");
      }, 150);

      setTimeout(() => {
        setAnimationClass("");
      }, 450);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <img
        id="main-image"
        src={mainImage}
        className={`rounded-lg h-[400px] w-full object-cover ${animationClass}`}
        alt="Product"
      />

      <div className="flex gap-4 overflow-x-auto">
        {images.slice(1).map((image) => (
          <button
            key={image.image_url}
            type="button"
            className="p-0 border-none bg-transparent rounded-lg h-full w-[80px] flex-shrink-0 block"
            onClick={() => handleImageChange(image.image_url)}
            aria-label="Show product image"
          >
            <img
              className="rounded-lg h-full w-full object-cover pointer-events-none"
              src={image.image_url}
              alt="Product thumbnail"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
