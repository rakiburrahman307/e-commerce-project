import React from "react";
import PropTypes from "prop-types";

const InputField = ({
  label,
  name,
  placeholder,
  type,
  register,
  required,
  errors,
}) => (
  <div className='mb-6'>
    <label
      htmlFor={name}
      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
    >
      {label}
    </label>
    <input
      {...register(name, { required: required && "This input is required." })}
      type={type}
      id={name}
      placeholder={placeholder}
      className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    />
    {errors?.[name] && (
      <span className='text-red-500'>{errors[name]?.message}</span>
    )}
  </div>
);
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};
export default React.memo(InputField);
