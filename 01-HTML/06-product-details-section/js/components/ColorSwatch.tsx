export default function ColorSwatch({
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
