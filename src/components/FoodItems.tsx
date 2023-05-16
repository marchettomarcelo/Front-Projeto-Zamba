import Image from "next/image";

export default function FoodItems({
  name,
  count,
  increment,
  decrement,
  image,
}: any) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md border-2 border-black p-4">
      <h2 className="mr-4 text-xl">
        {name}: {count}
      </h2>

      <Image src={image} width={100} height={100} alt={name} />

      <div className="gap flex flex-row">
        <button
          onClick={increment}
          className="rounded-full bg-green-500 px-4 py-2 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          onClick={decrement}
          className="ml-2 rounded-full bg-orange-600 px-4 py-2 text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
