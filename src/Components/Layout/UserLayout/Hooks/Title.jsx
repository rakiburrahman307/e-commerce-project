import PropTypes from 'prop-types';
const Title = ({title}) => {
    return (
        <div>
            <h2 className='text-2xl text-secondary-text dark:text-secondary-text-dark text-left'>{title}</h2>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string
};

export default Title;