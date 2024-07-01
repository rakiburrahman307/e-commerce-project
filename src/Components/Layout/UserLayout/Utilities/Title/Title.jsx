import React from 'react';
import PropTypes from 'prop-types';

const Title = React.memo(({ children }) => (
  <h2 className='text-2xl text-secondary-text dark:text-secondary-text-dark text-left'>
    {children}
  </h2>
));

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
