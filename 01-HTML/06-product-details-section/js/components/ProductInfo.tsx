import { useState } from "react";
import { ProductInfoProps } from "../types";

export function ReviewStars({ rating }: { rating: number }) {
  const starBackground = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
        fill="#E5E7EB"
      />
    </svg>
  );

  const fullStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clip-path="url(#clip0_7690_1325)">
        <path
          d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
          fill="#FACC15"
        />
      </g>
      <defs>
        <clipPath id="clip0_7690_1325">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const halfStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 18 18"
      fill="none"
    >
      <defs>
        <linearGradient id="halfFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="#FACC15" />
          <stop offset="50%" stopColor="#E5E7EB" />
        </linearGradient>
      </defs>
      <path
        d="M8.53834 0.609964C8.70914 0.199318 9.29086 0.199318 9.46166 0.609964L11.5278 5.57744C11.5998 5.75056 11.7626 5.86885 11.9495 5.88383L17.3123 6.31376C17.7556 6.3493 17.9354 6.90256 17.5976 7.19189L13.5117 10.6919C13.3693 10.8139 13.3071 11.0053 13.3506 11.1876L14.5989 16.4208C14.7021 16.8534 14.2315 17.1954 13.8519 16.9635L9.26063 14.1592C9.10062 14.0615 8.89938 14.0615 8.73937 14.1592L4.14806 16.9635C3.76851 17.1954 3.29788 16.8534 3.40108 16.4208L4.64939 11.1876C4.69289 11.0053 4.6307 10.8139 4.48831 10.6919L0.402413 7.19189C0.0646446 6.90256 0.244408 6.3493 0.687735 6.31376L6.05054 5.88383C6.23744 5.86885 6.40024 5.75056 6.47225 5.57744L8.53834 0.609964Z"
        fill="url(#halfFill)"
      />
    </svg>
  );

  const TOTAL_STARS = 5;

  return (
    <div className="flex flex-row gap-1">
      {Array(TOTAL_STARS)
        .fill(starBackground)
        .map((_, i) => {
          let starIcon;
          if (i < Math.floor(rating)) {
            starIcon = fullStar;
          } else if (i < Math.ceil(rating)) {
            starIcon = halfStar;
          } else {
            starIcon = starBackground;
          }
          return <span key={i}>{starIcon}</span>;
        })}
    </div>
  );
}

export function ColorSwatch({
  color,
  isSelected,
  onClick,
}: {
  color: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center inline-block p-[9.33px] ${
        isSelected
          ? "w-[38px] h-[38px] border border-solid border-indigo-700"
          : "w-[38px] h-[38px]"
      }  rounded-full bg-${color === "green" ? "emerald-500" : "yellow-600"}`}
      aria-pressed={isSelected}
      onClick={onClick}
      tabIndex={0}
      style={{ cursor: "pointer" }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {isSelected ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M11.6674 17.6993L22.3918 6.97485L24.0417 8.62477L11.6674 20.9991L4.24272 13.5745L5.89263 11.9246L11.6674 17.6993Z"
            fill="white"
          />
        </svg>
      ) : null}
    </button>
  );
}

export default function ProductInfo(props: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);

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
                {props.inventory[0].sale_price}
              </h2>
              <h3 className="line-through text-lg font-medium text-neutral-400">
                {props.inventory[0].list_price}
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
      <div className="flex flex-col gap-4">
        <h3 className="text-neutral-500 text-base font-normal">
          Available Colors
        </h3>
        <div className="flex gap-4">
          {props.colors.map((color, index) => (
            <ColorSwatch
              key={index}
              color={color}
              isSelected={selectedColor === color}
              onClick={() => handleColorClick(color)}
            />
          ))}
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
