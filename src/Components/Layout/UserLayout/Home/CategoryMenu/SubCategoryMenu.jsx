import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import { IoIosArrowForward } from "react-icons/io";

const SubCategoryMenu = ({ subcategories }) => {
  const { textColor } = useContextInfo();
  if (!subcategories) return null;
  return (
    <ul className='sub-category-menu bg-base-100 min-w-64 dark:bg-semi-dark p-4 rounded-md shadow-md absolute top-0 left-48 ml-1 z-10'>
      {subcategories?.map((subcategory, idx) => (
        <li key={idx} className='py-2'>
          <Link
            to={`/product/category/${subcategory?.value}`}
            className={`text-secondary-text group flex gap-1 items-center dark:text-secondary-text-dark cursor-pointer hover:${textColor}`}
          >
            {subcategory?.name}
            <IoIosArrowForward
                className={`hidden group-hover:flex`}
              />
          </Link>
        </li>
      ))}
    </ul>
  );
};
SubCategoryMenu.propTypes = {
  subcategories: PropTypes.array.isRequired,
};
export default SubCategoryMenu;
