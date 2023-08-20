"use client";
import React, { FC } from "react";
import useLoadImage from "@/Hooks/useLoadImage";
import { Song } from "../../Types";
import Image from "next/image";

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
};

const SongItem: FC<SongItemProps> = ({
    data, onClick
}) => {

    const imagePath = useLoadImage(data);

    return (
        <div
            className="relative groupflex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
            onClick={() => onClick(data.id)}
        >
            <div
                className="relative aspect-square w-full h-full rounded-md overflow-hidden"
            >
                <Image
                    className="object-cover"
                    src={imagePath || './asset/liked.png'}
                    fill
                    alt="Image"
                />
            </div>
        </div>
    )
};

export default SongItem;