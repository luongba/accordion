"use client";
import React from "react";
import clsx from "clsx";
export default function AccordionTrigger({
    children,
    collapseIconType,
    isLeftIcon,
    leftIcon,
    onClick,
    isOpen,
}) {
    const renderCollapseType = () => {
        if (collapseIconType === "chervon") {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 1024 1024"
                    className={clsx(
                        "transform origin-center transition duration-200 ease-out",
                        isOpen && "!rotate-90"
                    )}
                >
                    <path
                        fill="currentColor"
                        d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                    ></path>
                </svg>
            );
        } else {
            return (
                <div className="w-full h-full rounded-full border border-solid border-[#D1D5DB] flex items-center justify-center">
                    <svg
                        className="fill-[#090D14] shrink-0"
                        width="14"
                        height="14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            y="6"
                            width="14"
                            height="2"
                            rx="1"
                            className={clsx(
                                "transform origin-center transition duration-200 ease-out",
                                isOpen && "!rotate-180"
                            )}
                        />
                        <rect
                            y="6"
                            width="14"
                            height="2"
                            rx="1"
                            className={clsx(
                                "transform origin-center rotate-90 transition duration-200 ease-out",
                                isOpen && "!rotate-180"
                            )}
                        />
                    </svg>
                </div>
            );
        }
    };

    const renderIsLeftIcon = () => {
        if (isLeftIcon) {
            return (
                <div className="w-6 h-6 hidden md:flex items-center justify-center md:mr-2">
                    <div className="w-5 h-5 bg-[#6B7265] rounded-full flex items-center justify-center">
                        {leftIcon}
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <button
            className="w-full flex items-center justify-between accordion-btn"
            onClick={onClick}
        >
            <div className="flex items-center">
                {renderIsLeftIcon()}
                <h4 className="font-normal md:font-medium text-sm md:text-base text-[#090D14]">
                    {children}
                </h4>
            </div>
            <div className="w-[28px] h-[28px] md:w-8 md:h-8  text-[#090D14] flex items-center justify-center">
                {renderCollapseType()}
            </div>
        </button>
    );
}
