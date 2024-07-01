import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../../Features/authApiSlice";
import BigSpinner from "../../../BigSpinner/BigSpinner";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import useContextInfo from "../../Hooks/useContextInfo";
import PasswordInput from "./PasswordInput";
import InputField from "./InputField";

const Register = () => {
  const { textColor, borderColor, selectedColor } = useContextInfo();
  const [showPassword, setShowPassword] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const onSubmit = async (data) => {
    const { confirmPass, remember, ...formData } = data;
    setSubmitted(true);
    const isChecked = watch("remember");

    if (!isChecked) {
      ShowErrorMessage("Please agree to the terms and conditions.");
      return;
    }

    try {
      const response = await registerUser(formData).unwrap();
      ShowSuccessMessage(response?.message);
      navigate("/login");
    } catch (error) {
      ShowErrorMessage("Something went wrong", error?.message);
    }
  };

  const togglePasswordVisibility = useCallback((field) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      [field]: !prevShowPassword[field]
    }));
  }, []);

  return (
    <section className='w-full p-3 md:w-2/3 lg:w-2/3 mx-auto mt-16 min-h-screen'>
      {error && ShowErrorMessage(error)}
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center mb-5 gap-4 md:gap-0'>
        <h2 className='text-lg md:text-2xl font-semibold text-secondary-text dark:text-secondary-text-dark'>
          Create your Daraz Account
        </h2>
        <p className='text-sm font-light text-secondary-text dark:text-secondary-text-dark'>
          Already member?{" "}
          <Link to='/login' className={`${textColor}`}>
            Login{" "}
          </Link>
          here.
        </p>
      </div>
      {isLoading ? (
        <BigSpinner />
      ) : (
        <div className='flex max-w- flex-col md:flex-row lg:flex-row justify-between items-center gap-14 bg-white dark:bg-semi-dark p-3 md:p-10 shadow-xl dark:shadow-sm-light dark:shadow-white mt-5'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5 w-full'>
              <InputField
                label='Full Name'
                name='name'
                placeholder='Please Enter Your Name'
                type='text'
                register={register}
                required
                errors={errors}
              />

              <InputField
                label='Email'
                name='email'
                placeholder='Please Enter Your Email'
                type='email'
                register={register}
                required
                errors={errors}
              />

              <InputField
                label='Phone'
                name='phone'
                placeholder='Please Enter Your Phone'
                type='text'
                register={register}
                required
                errors={errors}
              />

              <div className='mb-6 gap-2 md:gap-10'>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Gender
                </label>
                <select
                  className='rounded-none bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  {...register("gender", {
                    required: "This input is required.",
                  })}
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <PasswordInput
                label='Password'
                name='password'
                placeholder='Please Enter Your Password'
                showPassword={showPassword.showPassword}
                togglePasswordVisibility={() => togglePasswordVisibility("showPassword")}
                register={register}
                required
                errors={errors}
              />

              <PasswordInput
                label='Confirm Password'
                name='confirmPass'
                placeholder='Confirm Your Password'
                showPassword={showPassword.showConfirmPassword}
                togglePasswordVisibility={() => togglePasswordVisibility("showConfirmPassword")}
                register={register}
                required
                errors={errors}
              />
            </div>

            <div className='flex items-start mb-6'>
              <div className='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                  onChange={(e) => setValue("remember", e.target.checked)}
                />
              </div>
              <label
                htmlFor='remember'
                className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                I agree with the{" "}
                <Link
                  to='#'
                  className={`${textColor} hover:underline dark:${textColor}`}
                >
                  terms and conditions.{"  "}
                </Link>
                {submitted && !watch("remember") && (
                  <span className='text-red-500'>
                    Please click the terms and conditions link to proceed.
                  </span>
                )}
              </label>
            </div>

            <button
              className={`border-[.5px] ${borderColor} w-full px-8 py-2 text-base ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
            >
              Register
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Register;
