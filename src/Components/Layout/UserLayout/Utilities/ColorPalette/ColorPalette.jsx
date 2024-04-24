
import './select.css';
import useContextInfo from "../../Hooks/useContextInfo";
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';
const ColorPalette = () => {

    const { selectedColor, setSelectedColor, setTextColor, setBorderColor } = useContextInfo();

    const handleChangeColor = (colors) => {
        const colorValue = colors.target.value;
        localStorage.setItem(
            "Preference",
            JSON.stringify({ preferenceColor: colorValue })
        );

        setSelectedColor(colorValue);
    };

    useEffect(() => {
        const colorName = selectedColor?.split("-")[1];
        const colorOpacity = selectedColor?.split("-")[2];
        const textColorClass = twMerge(`text-${colorName}-${colorOpacity}`);
        setTextColor(textColorClass);
        localStorage.setItem(
            "PreferenceTextColor",
            JSON.stringify({ textColor: textColorClass })
        );
    }, [selectedColor,setTextColor]);

    useEffect(() => {
        const colorName = selectedColor?.split("-")[1];
        const colorOpacity = selectedColor?.split("-")[2];
        const borderColorClass = twMerge(`border-${colorName}-${colorOpacity}`);
        setBorderColor(borderColorClass);
        localStorage.setItem(
            "PreferenceBorderColor",
            JSON.stringify({ borderColor: borderColorClass })
        );
    }, [selectedColor,setBorderColor]);



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
            <select onChange={handleChangeColor} className={`select-arrow block py-2.5 px-0 w-1/2 text-sm text-white ${selectedColor} border-0 border-b-2 border-white appearance-none dark:border-white focus:outline-none focus:ring-0 focus:border-white dark:bg-semi-dark dark:text-secondary-text-dark`}>
                {
                    colors?.map(color => <option
                        selected={selectedColor === color?.value}
                        key={color?.id}
                        value={color?.value}
                        onClick={() => handleChangeColor(color)}
                        style={{ fontWeight: selectedColor === color?.value ? "900" : "" }}
                    >{color?.name}</option>)
                }
            </select>
        </div>
    );
};

export default ColorPalette;
