export interface Image {
  image_url: string;
}

export interface ProductImagesProps {
  images: Image[];
}

export interface Inventory {
  sku: string;
  color: string;
  size: string;
  list_price: number;
  discount: null;
  discount_percentage: number;
  sale_price: number;
  sold: number;
  stock: number;
}

export interface ProductInfoProps {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  info: {
    title: string;
    description: string[];
  }[];
  inventory: Inventory[];
}
