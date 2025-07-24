import type { Photo } from "../services/api";
import { useState } from "react";
import LinkIcon from "../assets/links.svg?react";
import StarIcon from "../assets/star.svg?react";
import StarOutline from "../assets/star-outline.svg?react";

interface Props {
  photo: Photo;
}

export default function CardDesign({ photo }: Props) {
  const [liked, setLiked] = useState(photo.liked ?? false);

  return (
    <div className="flex items-start gap-3 min-h-[80px] sm:min-h-[90px]">
      <button
        onClick={() => setLiked(!liked)}
        className="cursor-pointer self-start"
      >
        {liked ? (
          <StarIcon className="w-5 h-5 text-yellow-400" />
        ) : (
          <StarOutline className="w-5 h-5 text-gray-400" />
        )}
      </button>

      <img
        src={photo.src.medium}
        srcSet={`${photo.src.large} 768w, ${photo.src.medium} 480w`}
        sizes="(min-width: 768px) 75px, 60px"
        alt={photo.alt}
        className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-md object-cover flex-shrink-0"
      />

      <div className="flex-1 overflow-hidden">
        <div className="font-semibold truncate">{photo.photographer}</div>
        <div className="text-sm text-gray-700 line-clamp-2">{photo.alt}</div>
        <div className="text-sm flex items-center gap-1">
          <span style={{ color: photo.avg_color }}>{photo.avg_color}</span>
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: photo.avg_color }}
          />
        </div>
      </div>

      <div className="flex items-start self-start">
        <a
          href={photo.photographer_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
        >
          <LinkIcon className="w-4 h-4" />
          Portfolio
        </a>
      </div>
    </div>
  );
}
