"use client";
import { FC, useEffect, useState } from "react";
import AuthModal from "@/Components/AuthModal";
import UploadModal from "@/Components/UploadModal";

interface ModalProviderProps {
    // products: ProductWithPrice[];
};

const ModalProvider: FC = () => {

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