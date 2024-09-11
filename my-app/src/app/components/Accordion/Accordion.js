"use client";
import React, { useState, useEffect } from "react";
export default function Accordion({ children, type, defaultOpenItems = [], collapseIconType = "default", isLeftIcon = false }) {
    const [openItems, setOpenItems] = useState([]);

    useEffect(() => {
        setOpenItems(defaultOpenItems)
    }, []);

    const handleToggle = (value) => {
        if (type === "single") {
            setOpenItems(openItems.includes(value) ? [] : [value]);
        } else {
            if (openItems.includes(value)) {
                setOpenItems(openItems.filter((item) => item !== value));
            } else {
                setOpenItems([...openItems, value]);
            }
        }
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        isOpen: openItems.includes(child.props.value),
                        onToggle: handleToggle,
                        collapseIconType,
                        isLeftIcon
                    });
                }
                return child;
            })}
        </div>
    );
}
