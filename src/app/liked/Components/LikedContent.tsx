"use client";
import React, { FC, useEffect } from "react";
import { Song } from "../../../../Types";
import { useUser } from "@/Hooks/useUser";
import MediaItem from "@/Components/MediaItem";
import LikeButton from "@/Components/LikeButton";
import useOnPlay from "@/Hooks/useOnPlay";
import { useRouter } from "next/navigation";

interface LikedContentProps {
    songs: Song[];
};

const LikedContent: FC<LikedContentProps> = ({ songs }) => {

    const { isLoading, user } = useUser();

    const onPlay = useOnPlay(songs);

    const router = useRouter();

    useEffect(() => {

        if (!isLoading && !user) {

            router.replace('/');

        }

    }, [isLoading, user, router]);

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
                No Liked Songs.
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-2 w-full p-6">
            {songs.map((song: any) => (
                <div
                    className="flex items-center gap-x-4 w-full"
                    key={song.id}
                >
                    <div className="flex-1">
                        <MediaItem
                            onClick={(id: string) => onPlay(id)}
                            data={song}
                        />
                    </div>
                    <LikeButton songId={song.id} />
                </div>
            ))}
        </div>
    )
};

export default LikedContent;