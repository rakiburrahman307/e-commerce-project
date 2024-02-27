import { useEffect, useState } from "react";
import { GithubPicker } from "react-color";

const ColorPalette = () => {
    const [color, setColor] = useState("");

    const handleColorChange = (selectedColor) => {
        setColor(selectedColor.hex);
    };
    useEffect(() => {
        // Store the preferenceColor in the local storage
        localStorage.setItem('Preference', JSON.stringify({ preferenceColor: color }));
    }, [color]);

    // const getStarting = JSON.parse(localStorage.getItem('Preference'));

    const limitedColors = ["#F85606", "#151269", "#ff0000", "#00ff00", "#0000ff", "#ffc900", "#eaa0a2", "#ffdbdc", "#046169", "#ffd700", "#ffa500", "#ff69b4", "#588c73", "#8c4646", "#00dbdb", "#741b47"];
    return (
        <div>
            <h2 className="text-xl text-white dark:text-secondary-text-dark my-2">Your Preference</h2>
            <GithubPicker
                color={color}
                onChange={handleColorChange}
                colors={limitedColors}
                triangle="hide"
                width="74%"
                styles={{ default: { card: { boxShadow: 'none', border: '1px solid #ddd' } } }}
            />
        </div>
    );
};

export default ColorPalette;
