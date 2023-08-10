"use client";
import React, { FC } from 'react';

interface SidebarProps {
    children: React.ReactNode;
};

const Sidebar: FC<SidebarProps> = ({
    children
}) => {
    return (
        <div>
            {children}
        </div>
    )
};

export default Sidebar;