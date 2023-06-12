import React from "react";
export interface PopoverProps {
    /**
     * Popover label
     */
    label: string;
    /**
     * Popover content
     */
    content: React.ReactNode;
}
export declare const Popover: ({ label, content }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
