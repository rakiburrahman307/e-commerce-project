// src/components/Login.js
import React, { useState, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useLoginUserMutation } from "../../../../Features/authApiSlice";
import ShowErrorMessage from "../../Utilities/ErrorMessage/ShowErrorMessage";
import BigSpinner from "../../../BigSpinner/BigSpinner";
import ShowSuccessMessage from "../../Utilities/SuccessMessage/ShowSuccessMessage";
import debounce from "lodash.debounce";
import SocialLoginButton from "./SocialLoginButton";

const Login = () => {
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback(
    debounce(async (data) => {
      try {
        const res = await loginUser(data).unwrap();
        if (res?.message === "Login Successful") {
          ShowSuccessMessage(res?.message);
          navigate(location?.state ? location?.state : "/");
        }
      } catch (error) {
        console.error(error);
      }
    }, 300),
    [loginUser, navigate, location]
  );

  const passwordToggleIcon = useMemo(() => {
    return show ? (
      <FaEye className={`text-secondary-text dark:text-secondary-text-dark`} onClick={() => setShow(!show)} size={20} />
    ) : (
      <FaEyeSlash className={`text-secondary-text dark:text-secondary-text-dark`} onClick={() => setShow(!show)} size={20} />
    );
  }, [show]);

  return (
    <section className="w-full p-3 md:w-2/3 lg:w-2/3 mx-auto mt-16 min-h-screen">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-5 gap-4 md:gap-0">
        <h2 className="text-lg md:text-2xl font-semibold text-secondary-text dark:text-secondary-text-dark">
          Welcome To Daraz Please Login
        </h2>
        <p className="text-sm font-light text-secondary-text dark:text-secondary-text-dark">
          New Member?{" "}
          <Link to="/register" className={textColor}>
            Register
          </Link>{" "}
          here.
        </p>
      </div>
      {error && ShowErrorMessage(error?.data?.error)}
      {isLoading && <BigSpinner />}
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-14 bg-white dark:bg-semi-dark p-2 md:p-10 shadow-xl dark:shadow-sm-light dark:shadow-white mt-5">
        <form className="w-full md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email*
            </label>
            <input
              {...register("email", { required: "This input is required." })}
              placeholder="Please Enter Your Email"
              type="email"
              id="email"
              className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors?.email && <span className="text-red-500">{errors?.email?.message}</span>}
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password*
            </label>
            <input
              {...register("password", {
                required: "This input is required.",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/,
                  message: "Password must contain at least one capital letter, one lowercase letter, one special character, and one number.",
                },
              })}
              type={show ? "text" : "password"}
              id="password"
              className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Please Enter Your Password"
            />
            {errors?.password && <span className="text-red-500">{errors?.password?.message}</span>}
            <p className="absolute right-4 top-[55%]">{passwordToggleIcon}</p>
          </div>
          <input
            type="submit"
            className={`border-[.5px] ${borderColor} w-full px-8 py-2 text-base ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
          />
        </form>
        <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 mb-10 md:mb-0">
          <SocialLoginButton
            platform="Google"
            iconSrc="https://tailus.io/sources/blocks/social/preview/images/google.svg"
            text="Continue with Google"
          />
          <SocialLoginButton
            platform="Github"
            iconSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            text="Continue with Github"
          />
          <SocialLoginButton
            platform="Facebook"
            iconSrc="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
            text="Continue with Facebook"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
