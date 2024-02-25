
const ColorPalette = () => {
    return (
        <div>
                            
        <select className="bg-bg-color text-black text-sm rounded-lg focus:ring-blue-500 block w-full dark:bg-bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled>Choose Color</option>
            <option className="bg-[#3CA2FA]" value="#3CA2FA">Blue</option>
            <option className="bg-[#BB4FDC]" value="#BB4FDC">Purple</option>
            <option className="bg-[#A42525]" value="#A42525">Maroon</option>
            <option className="bg-[#FA3636]" value="#FA3636">Red</option>
            <option className="bg-[#BB4FDC]" value="#BB4FDC">Purple</option>
            <option className="bg-[#FA72B8]" value="#FA72B8">Pink</option>
            <option className="bg-[#404693]" value="#404693">Navy</option>
        </select>
    </div>
    );
};

export default ColorPalette;