"use client";
import React, { FC } from 'react';
import { Song } from '../../Types';
import useLoadImage from '@/Hooks/useLoadImage';
import Image from "next/image";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
};

const MediaItem: FC<MediaItemProps> = ({
    data, onClick
}) => {

    const imageUrl = useLoadImage(data);

    const handleClick = () => {

        if (onClick) {
            return onClick(data.id);
        }

        // return player.setId(data.id);

    };

    return (
        <div
            className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
            onClick={handleClick}
        >
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image
                    src={imageUrl || "/images/music-placeholder.png"}
                    className="object-cover"
                    alt="MediaItem"
                    fill
                />
            </div>

            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">
                    {data.title}
                </p>

                <p className="text-neutral-400 text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    )
};

export default MediaItem;