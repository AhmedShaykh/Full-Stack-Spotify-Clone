"use client";
import React, { FC } from "react";
import useAuthModal from "@/Hooks/useAuthModal";
import { useUser } from "@/Hooks/useUser";
import usePlayer from "@/Hooks/usePlayer";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
};

const Header: FC<HeaderProps> = ({
    children, className
}) => {

    const authModal = useAuthModal();

    const router = useRouter();

    const supabaseClient = useSupabaseClient();

    const player = usePlayer();

    const { user } = useUser();

    const handleLogout = async () => {

        const { error } = await supabaseClient.auth.signOut();

        player.reset();

        router.refresh();

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Logged Out!")
        }
    };

    return (
        <div className={twMerge(
            `h-fit bg-gradient-to-b from-emerald-800 p-6`,
            className
        )}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button
                        className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
                        onClick={() => router.back()}
                    >
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button
                        className="rounded-full bg-black flex items-center justify-center cursor-pointer hover:opacity-75 transition"
                        onClick={() => router.forward()}
                    >
                        <RxCaretRight className="text-white" size={35} />
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button
                        className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
                        onClick={() => router.push("/")}
                    >
                        <HiHome className="text-black" size={20} />
                    </button>
                    <button
                        className="rounded-full p-2 bg-white flex items-center justify-center cursor-pointer hover:opacity-75 transition"
                        onClick={() => router.push("/search")}
                    >
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex justify-between items-center gap-x-4">
                    {user ? (
                        <div className="flex gap-x-4 items-center">
                            <Button
                                onClick={handleLogout}
                                className="bg-white px-6 py-2"
                            >
                                Logout
                            </Button>
                            <Button
                                onClick={() => router.push("/")}
                                className="bg-white"
                            >
                                <FaUserAlt />
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <Button
                                    className="bg-transparent text-neutral-300 font-medium"
                                    onClick={authModal.onOpen}
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div>
                                <Button
                                    className="bg-white px-6 py-2"
                                    onClick={authModal.onOpen}
                                >
                                    Login
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {children}
        </div>
    )
};

export default Header;