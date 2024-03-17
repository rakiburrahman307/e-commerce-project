import { Link } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
const Category = () => {
 const {textColor} = useContextInfo();
    const someCategory = [
        {
            name: "Free Delivery",
            imageUrl: 'https://i.ibb.co/fFbKGc6/free-Delivery.jpg',
            link: '',

        },
        {
            name: "Delivery",
            imageUrl: 'https://i.ibb.co/fFbKGc6/free-Delivery.jpg',
            link: '',

        },
        {

            name: "Low Price!",
            imageUrl: 'https://i.ibb.co/fFbKGc6/free-Delivery.jpg',
            link: '',

        },
        {
            name: 'Mart',
            imageUrl: 'https://i.ibb.co/fFbKGc6/free-Delivery.jpg',
            link: '',

        },
        {

            name: "Visa Card",
            imageUrl: 'https://i.ibb.co/fFbKGc6/free-Delivery.jpg',
            link: '',

        },


    ]

    return (
        <div className="bg-white mt-5 flex mx-auto flex-col md:flex-row lg:flex-row justify-evenly items-center w-full dark:bg-bg-primary-dark rounded-box space-y-2 py-3 text-secondary-text dark:text-secondary-text-dark">
            {someCategory?.map((category, idx) => (
                <div key={idx} className="group flex w-full justify-center px-2 items-center rounded-md">
                    <Link to={category?.link} className={`group-hover:${textColor}`}>
                        <img src={category?.imageUrl} alt={category?.name} className="w-20 h-20 rounded-full mb-4" />
                        <p className="text-center">{category?.name}</p>
                    </Link>
                </div>
            ))}
        </div>

    );
};

export default Category;