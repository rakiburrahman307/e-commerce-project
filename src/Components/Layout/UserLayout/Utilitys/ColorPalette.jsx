import { useEffect, useState } from "react";
import './select.css';
const ColorPalette = () => {
    const [color, setColor] = useState("");
    useEffect(() => {
        // Store the preferenceColor in the local storage
        localStorage.setItem('Preference', JSON.stringify({ preferenceColor: color }));
    }, [color]);

    const handleChangeColor = (colors) => {
        const colorValue = colors.target.value;
        setColor(colorValue)

    };

    const colors = [
        { id: 1, value: "", name: "Default" },
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
            <h2 className="text-xl text-white dark:text-secondary-text-dark my-2">Your Preference</h2>
            <select onChange={handleChangeColor} className="select-arrow block py-2.5 px-0 w-1/2 text-sm text-white bg-bg-primary border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-0 focus:border-white">
                {
                    colors?.map(color => <option
                        key={color?.id}
                        value={color?.value}
                        onClick={() => handleChangeColor(color)}
                    >{color?.name}</option>)
                }
            </select>
        </div>
    );
};

export default ColorPalette;
