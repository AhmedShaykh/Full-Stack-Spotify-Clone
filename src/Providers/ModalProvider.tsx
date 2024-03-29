"use client";
import { useEffect, useState } from "react";
import AuthModal from "@/Components/AuthModal";
import UploadModal from "@/Components/UploadModal";

const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {

        setIsMounted(true);

    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    )
};

export default ModalProvider;