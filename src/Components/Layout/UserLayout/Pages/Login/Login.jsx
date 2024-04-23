import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import Button from "../../Utilitys/Button/Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useLoginUserMutation } from "../../../../Features/Authentications/authApiSlice";
import showSuccessMessage from "../../Utilitys/ShowSuccsessMessage/showSuccsess";
import showErrorMessage from "../../Utilitys/showErrorMessage/showErrorMessage";
import BigSpinner from "../../../BigSpinner/BigSpinner";

const Login = () => {
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  4;
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handelSubmit data here
  const onSubmit = async data => {
    try {
      const response = await loginUser(data);
      if (response?.error?.status !== 401) {
        navigate(location?.state ? location?.state : "/");
        showSuccessMessage("Login Success");
      } else {
        showErrorMessage(response?.error?.data?.error);
      }
    } catch (error) {
      console.log(error.message);
      showErrorMessage(error?.message);
    }
  };
  return (
    <section className='w-full p-3 md:w-2/3 lg:w-2/3 mx-auto mt-16 min-h-screen'>
      <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center mb-5 gap-4 md:gap-0'>
        <h2 className='text-lg md:text-2xl font-semibold text-secondary-text dark:text-secondary-text-dark'>
          WallCome To Daraz Please Login
        </h2>

        <p className='text-sm font-light text-secondary-text dark:text-secondary-text-dark'>
          New Member?{" "}
          <Link to='/register' className={`${textColor}`}>
            Register{" "}
          </Link>
          here.
        </p>
      </div>
      {isError && showErrorMessage(isError)}
      {isLoading && <BigSpinner />}
      <div className='flex flex-col md:flex-row lg:flex:row justify-between items-center gap-14 bg-white dark:bg-semi-dark p-2 md:p-10 shadow-xl dark:shadow-sm-light dark:shadow-white mt-5'>
        <form className='w-full md:w-1/2' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Email*
            </label>
            <input
              {...register("email", { required: "This input is required." })}
              placeholder='Please Enter Your Email'
              type='email'
              id='email'
              className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />

            {errors?.email && (
              <span className='text-red-500'>{errors?.email?.message}</span>
            )}
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
              <span className='text-red-500'>{errors?.password?.message}</span>
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

          <input
            type='submit'
            className={`border-[.5px] ${borderColor} w-full px-8 py-2 text-base ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
          />
        </form>

        <div className='w-full md:w-1/2 flex flex-col justify-between gap-5 mb-10 md:mb-0'>
          <Button
            className={`relative h-12 w-full origin-top transform border-[.5px] ${borderColor} text-lg ${textColor} before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:${selectedColor}`}
            value='Login With FaceBook'
          ></Button>
          <Button
            className={`relative h-12 w-full origin-top transform border-[.5px] ${borderColor} text-lg ${textColor} before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:${selectedColor}`}
            value='Login With FaceBook'
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
