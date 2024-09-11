"use client";
import React, { useRef } from "react";
import clsx from "clsx";
import { roboto_mono } from "@/app/fonts";
export default function AccordionContent({ children, isOpen }) {
    const contentRef = useRef(null);
    return (
        <div
            ref={contentRef}
            className={clsx(
                "grid relative overflow-hidden transition-all duration-300 ease-in-out",
                {
                    "grid-rows-[1fr] opacity-100": isOpen,
                    "grid-rows-[0fr] opacity-0": !isOpen,
                }
            )}
            style={{
                maxHeight: isOpen
                    ? `${contentRef.current.scrollHeight}px`
                    : "0",
            }}
        >
            <div
                className={`text-sm md:font-normal mt-1 md:mt-2 ${roboto_mono.className}`}
            >
                {children}
            </div>
        </div>
    );
}
