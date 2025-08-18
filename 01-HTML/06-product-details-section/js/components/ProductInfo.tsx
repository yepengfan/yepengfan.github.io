import { useState } from "react";
import { ProductInfoProps } from "../types";
import ReviewStars from "./ReviewStars";
import ColorSwatch from "./ColorSwatch";

export default function ProductInfo(props: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);
  const [selectedSize, setSelectedSize] = useState(props.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [infoToggle, setInfoToggle] = useState(
    new Array(props.info.length).fill(false)
  );

  const { colors } = props || [];
  const sizes = [...new Set(props.inventory.map((item) => item.size))];
  const maxQuantity =
    props.inventory.find(
      (item) => item.color === selectedColor && item.size === selectedSize
    )?.stock || 0;
  const isAtMaxQuantity = quantity >= maxQuantity;

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
                className={`border rounded py-[12px] px-[20px] uppercase ${
                  selectedSize === size
                    ? "border-indigo-700"
                    : "border-neutral-200"
                }`}
                key={size}
                onClick={() => setSelectedSize(size)}
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
            <div className={isAtMaxQuantity ? "tooltip" : ""}>
              <button
                disabled={isAtMaxQuantity}
                onClick={() => setQuantity((quantity) => quantity + 1)}
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
                    d="M8.30546 7.9721V3.80544H9.69435V7.9721H13.861V9.36099H9.69435V13.5277H8.30546V9.36099H4.13879V7.9721H8.30546Z"
                    fill="#525252"
                  />
                </svg>
              </button>
              {isAtMaxQuantity && (
                <span className="tooltiptext">insufficient stock</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <button className="w-full bg-indigo-700 rounded px-5 py-3 text-white">
          Add to Cart
        </button>
        <div className="flex flex-col">
          <ul className="flex flex-col gap-8 divide-y">
            {props.info.map((item, index) => (
              <li key={index} className="flex flex-col pt-6 first:pt-0">
                <div className="flex text-lg font-medium justify-between gap-6">
                  <div>
                    <p>{item.title}</p>
                    {infoToggle[index] && (
                      <div>
                        <ul className="text-base font-normal list-disc pl-5">
                          {item.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  {
                    <button
                      className="flex self-start"
                      onClick={() => {
                        const newInfoToggle = [...infoToggle];
                        newInfoToggle[index] = !newInfoToggle[index];
                        setInfoToggle(newInfoToggle);
                      }}
                    >
                      {infoToggle[index] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M12 22.6666C6.47715 22.6666 2 18.1894 2 12.6666C2 7.14378 6.47715 2.66663 12 2.66663C17.5228 2.66663 22 7.14378 22 12.6666C22 18.1894 17.5228 22.6666 12 22.6666ZM12 20.6666C16.4183 20.6666 20 17.0849 20 12.6666C20 8.24835 16.4183 4.66663 12 4.66663C7.58172 4.66663 4 8.24835 4 12.6666C4 17.0849 7.58172 20.6666 12 20.6666ZM7 11.6666H17V13.6666H7V11.6666Z"
                            fill="#A3A3A3"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M11 11.6666V7.66663H13V11.6666H17V13.6666H13V17.6666H11V13.6666H7V11.6666H11ZM12 22.6666C6.47715 22.6666 2 18.1894 2 12.6666C2 7.14378 6.47715 2.66663 12 2.66663C17.5228 2.66663 22 7.14378 22 12.6666C22 18.1894 17.5228 22.6666 12 22.6666ZM12 20.6666C16.4183 20.6666 20 17.0849 20 12.6666C20 8.24835 16.4183 4.66663 12 4.66663C7.58172 4.66663 4 8.24835 4 12.6666C4 17.0849 7.58172 20.6666 12 20.6666Z"
                            fill="#A3A3A3"
                          />
                        </svg>
                      )}
                    </button>
                  }
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
