"use client";
import React, { FC } from "react";
import { MyUserContextProvider } from "@/Hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
};

export default UserProvider;