import { ProductImagesProps } from "../types";

export default function ProductImages({ images }: ProductImagesProps) {
  return (
    <div className="flex flex-col gap-6">
      <img src={images[0].image_url} alt="Product" />
      <div className="flex gap-4 overflow-x-auto">
        {images.slice(1).map((image) => (
          <img key={image.image_url} src={image.image_url} alt="Product" />
        ))}
      </div>
    </div>
  );
}
