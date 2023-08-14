"use client";
import { FC, useEffect, useState } from "react";
import AuthModal from "@/Components/AuthModal";

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
        </>
    )
};

export default ModalProvider;