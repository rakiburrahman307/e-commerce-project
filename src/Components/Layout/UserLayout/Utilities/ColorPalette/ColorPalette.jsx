import './select.css';
import useContextInfo from "../../Hooks/useContextInfo";
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';

const ColorPalette = () => {
    const { selectedColor, setSelectedColor, setTextColor, setBorderColor } = useContextInfo();

    const handleChangeColor = (event) => {
        const colorValue = event.target.value;
        localStorage.setItem(
            "Preference",
            JSON.stringify({ preferenceColor: colorValue })
        );

        setSelectedColor(colorValue);
    };

    useEffect(() => {
        if (selectedColor) {
            const [_, colorName, colorOpacity] = selectedColor.split("-");
            const textColorClass = twMerge(`text-${colorName}-${colorOpacity}`);
            setTextColor(textColorClass);
            localStorage.setItem(
                "PreferenceTextColor",
                JSON.stringify({ textColor: textColorClass })
            );

            const borderColorClass = twMerge(`border-${colorName}-${colorOpacity}`);
            setBorderColor(borderColorClass);
            localStorage.setItem(
                "PreferenceBorderColor",
                JSON.stringify({ borderColor: borderColorClass })
            );
        }
    }, [selectedColor, setTextColor, setBorderColor]);

    const colors = [
        { id: 1, value: "bg-orange-500", name: "Orange" },
        { id: 2, value: "bg-green-500", name: "Green" },
        { id: 3, value: "bg-blue-700", name: "Blue" },
        { id: 4, value: "bg-indigo-700", name: "Indigo" },
        { id: 5, value: "bg-blue-900", name: "Navy blue" },
        { id: 6, value: "bg-purple-900", name: "Purple" },
        { id: 7, value: "bg-pink-600", name: "Pink" },
        { id: 8, value: "bg-yellow-400", name: "Yellow" }
    ];

    return (
        <div>
            <h2 className="text-xl text-white dark:text-secondary-text-dark my-2">System Color</h2>
            <select
                onChange={handleChangeColor}
                value={selectedColor || ""}
                className={`select-arrow block py-2.5 px-0 w-1/2 text-sm text-white ${selectedColor} border-0 border-b-2 border-white appearance-none dark:border-white focus:outline-none focus:ring-0 focus:border-white dark:bg-semi-dark dark:text-secondary-text-dark`}
            >
                {colors.map(color => (
                    <option
                        key={color.id}
                        value={color.value}
                        style={{ fontWeight: selectedColor === color.value ? "900" : "" }}
                    >
                        {color.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ColorPalette;
