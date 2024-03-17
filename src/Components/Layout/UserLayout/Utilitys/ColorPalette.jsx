
import './select.css';
import useContextInfo from "../Hooks/useContextInfo";
const ColorPalette = () => {

    const { selectedColor, setSelectedColor } = useContextInfo();

    const handleChangeColor = (colors) => {
        const colorValue = colors.target.value;
        localStorage.setItem(
            "Preference",
            JSON.stringify({ preferenceColor: colorValue })
        );
        setSelectedColor(colorValue);
    };


    const colors = [
        { id: 1, value: "orange-500", name: "Orange" },
        { id: 2, value: "green-500", name: "Green" },
        { id: 3, value: "blue-700", name: "Blue" },
        { id: 4, value: "indigo-700", name: "Indigo" },
        { id: 5, value: "blue-900", name: "Navy blue" },
        { id: 6, value: "purple-900", name: "Purple" },
        { id: 7, value: "pink-600", name: "Pink" },
        { id: 8, value: "yellow-400", name: "Yellow" }
    ];

    return (
        <div>
            <h2 className="text-xl text-white dark:text-secondary-text-dark my-2">Your Preference</h2>
            <select onChange={handleChangeColor} className={`select-arrow block py-2.5 px-0 w-1/2 text-sm text-white bg-${selectedColor} border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white focus:outline-none focus:ring-0 focus:border-white`}>
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
