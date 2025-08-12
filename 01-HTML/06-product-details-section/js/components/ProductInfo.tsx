import { useState } from "react";
import { ProductInfoProps } from "../types";
import ReviewStars from "./ReviewStars";
import ColorSwatch from "./ColorSwatch";

export default function ProductInfo(props: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const { colors } = props || [];
  const sizes = [...new Set(props.inventory.map((item) => item.size))];

  function handleColorClick(color: string) {
    setSelectedColor(color);
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">{props.name}</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-end">
              <h2 className="text-3xl font-medium pr-[8px]">
                ${props.inventory[0].sale_price}
              </h2>
              <h3 className="line-through text-lg font-medium text-neutral-400">
                ${props.inventory[0].list_price}
              </h3>
            </div>
            <div>
              <span className="px-[10px] py-[4px] rounded-full border border-green-200 bg-green-50 text-green-700">
                {props.inventory[0].discount_percentage}% OFF
              </span>
              <span className="px-[10px] py-[4px] rounded-full border border-amber-200 bg-amber-50 text-amber-700">
                {props.inventory[0].discount_percentage}% OFF
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h4>{props.rating.toFixed(1)}</h4>
            <ReviewStars rating={props.rating} />
            <p className="text-indigo-700 text-sm font-medium">
              See all {props.reviews} reviews
            </p>
          </div>
        </div>
      </div>
      <p className="text-base font-normal">{props.description}</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-500 text-base font-normal">
            Available Colors
          </h3>
          <div className="flex gap-4">
            {colors.map((color, index) => (
              <ColorSwatch
                key={index}
                color={color}
                isSelected={selectedColor === color}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-500 text-base font-normal">
            Available Sizes
          </h3>
          <div className="flex gap-4 overflow-x-auto">
            {sizes.map((size) => (
              <div
                className="border border-neutral-200 rounded py-[12px] px-[20px] uppercase"
                key={size}
              >
                <h4>{size}</h4>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-neutral-500 text-base font-normal">Quantity</h3>
          <div className="w-fit bg-neutral-50 flex items-center gap-3 border border-neutral-200 rounded px-4 py-2">
            <button
              onClick={() =>
                setQuantity((quantity) =>
                  quantity - 1 >= 0 ? quantity - 1 : 0
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                className="p-[1.67px]"
              >
                <path
                  d="M13.861 7.97209H4.13879V9.36098H13.861V7.97209Z"
                  fill="#A3A3A3"
                />
              </svg>
            </button>
            <p className="w-[49px] h-[32px] px-3 py-1.5 flex items-center justify-center text-sm font-medium">
              {quantity}
            </p>{" "}
            <button onClick={() => setQuantity((quantity) => quantity + 1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                className="p-[1.67px]"
              >
                <path
                  d="M8.30546 7.9721V3.80544H9.69435V7.9721H13.861V9.36099H9.69435V13.5277H8.30546V9.36099H4.13879V7.9721H8.30546Z"
                  fill="#525252"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ul>
        {props.inventory.map((item) => (
          <li key={item.sku}>
            {item.color} - {item.size} - {item.list_price}
          </li>
        ))}
      </ul>
    </div>
  );
}
