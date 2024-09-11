"use client";
import React from "react";

export default function AccordionItem({ value, isOpen, collapseIconType, isLeftIcon, onToggle, children }) {
    return (
        <div className="border-b border-solid border-[#E5E7EB] relative bg-white px-3 md:px-4 py-2 md:py-3">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        isOpen,
                        onClick: () => onToggle(value),
                        collapseIconType,
                        isLeftIcon
                    });
                }
                return child;
            })}
        </div>
    );
}
