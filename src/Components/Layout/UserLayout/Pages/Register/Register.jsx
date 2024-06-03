import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import Button from "../../Utilities/Button/Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useRegisterUserMutation } from "../../../../Features/authApiSlice";
import BigSpinner from "../../../BigSpinner/BigSpinner";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";

const Register = () => {
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const [registerUser, { isLoading, error }] = useRegisterUserMutation();
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { confirmPass, remember, ...formData } = data;
    setSubmitted(true);
    try {
      const response = await registerUser(formData).unwrap();
      ShowSuccessMessage(response?.message);
      navigate("/login");
    } catch (error) {
      ShowErrorMessage("Something was wrong", error?.message);
    }
  };
  const isChecked = watch("remember");
  return (
    <section className='w-full p-3 md:w-2/3 lg:w-2/3 mx-auto mt-16 min-h-screen'>
      {error && ShowErrorMessage(error)}
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center mb-5 gap-4 md:gap-0'>
        <h2 className='text-lg md:text-2xl font-semibold text-secondary-text dark:text-secondary-text-dark'>
          Create your Daraz Account
        </h2>
        <p className='text-sm font-light text-secondary-text dark:text-secondary-text-dark'>
          Already member?{" "}
          <Link to='/register' className={`${textColor}`}>
            Login{" "}
          </Link>
          here.
        </p>
      </div>
      {isLoading ? (
        <BigSpinner />
      ) : (
        <div className='flex flex-col md:flex-row lg:flex:row justify-between items-center gap-14 bg-white dark:bg-semi-dark p-3 md:p-10 shadow-xl dark:shadow-sm-light dark:shadow-white mt-5'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5 w-full'>
              <div className='mb-6'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Full Name
                </label>
                <input
                  {...register("name", { required: "This input is required." })}
                  placeholder='Please Enter Your Name'
                  type='text'
                  id='name'
                  className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />

                {errors?.email && (
                  <span className='text-red-500'>{errors?.name?.message}</span>
                )}
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "This input is required.",
                  })}
                  placeholder='Please Enter Your Email'
                  type='email'
                  id='email'
                  className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />

                {errors?.email && (
                  <span className='text-red-500'>{errors?.email?.message}</span>
                )}
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='phone'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Phone
                </label>
                <input
                  {...register("phone", {
                    required: "This input is required.",
                  })}
                  placeholder='Please Enter Your Email'
                  type='text'
                  id='phone'
                  className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />

                {errors?.email && (
                  <span className='text-red-500'>{errors?.phone?.message}</span>
                )}
              </div>

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

              <div className='mb-6 relative'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password*
                </label>
                <input
                  {...register("password", {
                    required: "This input is required.",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/,
                      message:
                        "Password must contain at least one capital letter, one lowercase letter, one special character, and one number.",
                    },
                  })}
                  type={show ? "text" : "password"}
                  id='password'
                  className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder='Please Enter Your Password'
                />
                {errors?.password && (
                  <span className='text-red-500'>
                    {errors?.password?.message}
                  </span>
                )}
                <p className='absolute right-4 top-[55%]'>
                  {show ? (
                    <FaEye
                      className={`text-secondary-text dark:text-secondary-text-dark`}
                      onClick={() => setShow(!show)}
                      size={20}
                    />
                  ) : (
                    <FaEyeSlash
                      className={`text-secondary-text dark:text-secondary-text-dark`}
                      onClick={() => setShow(!show)}
                      size={20}
                    />
                  )}
                </p>
              </div>
              <div className='mb-6 relative'>
                <label
                  htmlFor='confirmPass'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Confirm Password
                </label>
                <input
                  {...register("confirmPass", {
                    required: "This input is required.",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                    pattern: {
                      value:
                        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/,
                      message:
                        "Password must contain at least one capital letter, one lowercase letter, one special character, and one number.",
                    },
                  })}
                  type={show ? "text" : "password"}
                  id='confirmPass'
                  className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder='Minimum 8 character with a number and special latter'
                />
                {errors?.confirmPass && (
                  <span className='text-red-500'>
                    {errors?.confirmPass?.message}
                  </span>
                )}
                <p className='absolute right-4 top-[55%]'>
                  {show ? (
                    <FaEye
                      className={`text-secondary-text dark:text-secondary-text-dark`}
                      onClick={() => setShow(!show)}
                      size={20}
                    />
                  ) : (
                    <FaEyeSlash
                      className={`text-secondary-text dark:text-secondary-text-dark`}
                      onClick={() => setShow(!show)}
                      size={20}
                    />
                  )}
                </p>
              </div>
            </div>
            <div className='flex items-start mb-6'>
              <div className='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                  required
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
                  terms and conditions
                </Link>
                .
                {submitted && !isChecked && (
                  <p className='text-red-500'>
                    Please click the terms and conditions link to proceed.
                  </p>
                )}
              </label>
            </div>
            <button
              className={`border-[.5px] ${borderColor} w-full px-8 py-2 text-base ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
            >
              Register
            </button>
            <div className='divider my-10'>OR</div>
          </form>
          {/* <div className='w-full flex flex-col gap-5 mb-10 md:mb-0'>
        <button
          className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
        >
          <div className='relative flex items-center space-x-4 justify-center'>
            <img
              src='https://tailus.io/sources/blocks/social/preview/images/google.svg'
              class='absolute left-0 w-5'
              alt='google logo'
            />
            <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
              Continue with Google
            </span>
          </div>
        </button>
        <button
          className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
        >
          <div className='relative flex items-center space-x-4 justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              class='absolute left-0 w-5 text-gray-700'
              viewBox='0 0 16 16'
            >
              <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
            </svg>
            <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
              Continue with Github
            </span>
          </div>
        </button>
        <button
          className='group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100'
        >
          <div className='relative flex items-center space-x-4 justify-center'>
            <img
              src='https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg'
              class='absolute left-0 w-5'
              alt='Facebook logo'
            />
            <span className='block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base'>
              Continue with Facebook
            </span>
          </div>
        </button>
      </div> */}
        </div>
      )}

    </section>
  );
};

export default Register;
