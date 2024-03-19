import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';
const Button = ({className, value, extraClass, to}) => {
    return (
       <Link to={to}><button className={`${className} ${extraClass}`}>
       {value}
   </button></Link>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    extraClass: PropTypes.string,
    to: PropTypes.string
};
export default Button;