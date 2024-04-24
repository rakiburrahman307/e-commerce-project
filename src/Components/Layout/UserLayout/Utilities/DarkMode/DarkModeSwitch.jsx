import { IoSunny, IoMoon } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";
import useContextInfo from "../../Hooks/useContextInfo";
import React, { useCallback, useEffect, useState } from "react";
const DarkModeSwitch = () => {
    const { selectedColor } = useContextInfo();
    const [theme, setTheme] = useState(
        localStorage?.getItem("theme") ? localStorage?.getItem("theme") : "system"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const iconName = {
        IoSunny,
        IoMoon,
        HiComputerDesktop,
    };
    const icons = [
        {
            name: "IoSunny",
            text: "light",
        },
        {
            name: "IoMoon",
            text: "dark",
        },
        {
            name: "HiComputerDesktop",
            text: "system",
        },
    ];
    const onWindowMatches = useCallback(async () => {
        if (
            localStorage?.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery?.matches)
        ) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [darkQuery, element]);

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;
            case "light":
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                onWindowMatches();
                break;
        }
    }, [theme, element, onWindowMatches]);
    darkQuery.addEventListener("change", (e) => {
        if (!("theme" in localStorage)) {
            if (e.matches) {
                element.classList.add("dark");
                onWindowMatches();
            } else {
                element.classList.remove("dark");
                onWindowMatches();
            }
        }
    });
    return (
        <div className="mt-5">
            <h2 className="text-xl text-white dark:text-secondary-text-dark my-2">Dark Mode</h2>
            <div
                className={`dark:text-secondary-text ${selectedColor} rounded-md dark:bg-semi-dark`}
            >

                {icons?.map((icon) => (
                    <button
                        onClick={() => setTheme(icon?.text)}
                        key={icon?.text}
                        className={`w-8 h-8 text-xl rounded-full m-1`}
                    >
                        {React.createElement(iconName[icon?.name], {
                            className: ` ${theme === icon?.text && "text-white"} text-2xl`,
                        })}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DarkModeSwitch;
