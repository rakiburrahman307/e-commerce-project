import React from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PropTypes from "prop-types";

const PasswordInput = ({ label, name, placeholder, showPassword, togglePasswordVisibility, register, required, errors }) => (
    <div className='mb-6 relative'>
      <label htmlFor={name} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{label}</label>
      <input
        {...register(name, {
          required: required && "This input is required.",
          pattern: {
            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/,
            message: "Password must contain at least one capital letter, one lowercase letter, one special character, and one number."
          }
        })}
        type={showPassword ? "text" : "password"}
        id={name}
        placeholder={placeholder}
        className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      />
      {errors?.[name] && <span className='text-red-500'>{errors[name]?.message}</span>}
      <p className='absolute right-4 top-[55%]'>
        {showPassword ? (
          <FaEye className={`text-secondary-text dark:text-secondary-text-dark`} onClick={togglePasswordVisibility} size={20} />
        ) : (
          <FaEyeSlash className={`text-secondary-text dark:text-secondary-text-dark`} onClick={togglePasswordVisibility} size={20} />
        )}
      </p>
    </div>
  );
PasswordInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  showPassword: PropTypes.bool.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errors: PropTypes.object,
};
export default React.memo(PasswordInput);
