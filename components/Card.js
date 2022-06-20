import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-3 hover:text-white cursor-pointer active:text-red-500 xl:hover:scale-105 transition-transform duration-200">
      <Image
        layout="responsive"
        width={200}
        height={100}
        src={BASE_URL + result.backdrop_path}
        alt="photo"
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title}</h2>
        <p className="flex place-items-center">
          {result.release_date}
          <ThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
