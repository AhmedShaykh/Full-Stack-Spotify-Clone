"use client";
import React, { FC } from "react";
import SongItem from "@/Components/SongItem"
import useOnPlay from "@/Hooks/useOnPlay";
import { Song } from "../../../../Types";

interface PageContentProps {
    songs: Song[];
};

const PageContent: FC<PageContentProps> = ({ songs }) => {

    const onPlay = useOnPlay(songs);

    if (songs.length === 0) {
        return (
            <div className="mt-4 text-neutral-400">
                No Songs Available.
            </div>
        )
    }

    return (
        <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4"
        >
            {songs.map((item) => (
                <SongItem
                    onClick={(id: string) => onPlay(id)}
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    )
}

export default PageContent;