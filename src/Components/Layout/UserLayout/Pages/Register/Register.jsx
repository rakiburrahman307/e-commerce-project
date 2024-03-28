import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useContextInfo from "../../Hooks/useContextInfo";
import Button from "../../../Reuseable/Button/Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const { textColor, selectedColor, borderColor } = useContextInfo();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const isChecked = watch("remember");
  return (
    <section className="w-full p-3 md:w-2/3 lg:w-2/3 mx-auto mt-16 min-h-screen">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mb-5 gap-4 md:gap-0">
        <h2 className="text-lg md:text-2xl font-semibold text-secondary-text dark:text-secondary-text-dark">
          Create your Daraz Account
        </h2>
        <p className="text-sm font-light text-secondary-text dark:text-secondary-text-dark">
          Already member?{" "}
          <Link to="/register" className={`${textColor}`}>
            Login{" "}
          </Link>
          here.
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex:row justify-between items-center gap-14 bg-white dark:bg-semi-dark p-3 md:p-10 shadow-xl dark:shadow-sm-light dark:shadow-white mt-5">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5 w-full">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: "This input is required." })}
                placeholder="Please Enter Your Name"
                type="text"
                id="name"
                className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />

              {errors?.email && (
                <span className="text-red-500">{errors?.name?.message}</span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                {...register("email", { required: "This input is required." })}
                placeholder="Please Enter Your Email"
                type="email"
                id="email"
                className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />

              {errors?.email && (
                <span className="text-red-500">{errors?.email?.message}</span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                {...register("phone", { required: "This input is required." })}
                placeholder="Please Enter Your Email"
                type="text"
                id="phone"
                className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />

              {errors?.email && (
                <span className="text-red-500">{errors?.phone?.message}</span>
              )}
            </div>
            <div className="mb-6 flex items-center gap-2 md:gap-10">
              <div>
                <label>Select Date</label>
                <Controller
                  control={control}
                  name="ReactDatepicker"
                  render={({ field }) => (
                    <ReactDatePicker
                      className="input rounded-none bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholderText="Select Date"
                      onChange={(e) => field.onChange(e)}
                      selected={field.value}
                    />
                  )}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender
                </label>
                <select
                  className="rounded-none bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("gender", {
                    required: "This input is required.",
                  })}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                id="password"
                className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Please Enter Your Password"
              />
              {errors?.password && (
                <span className="text-red-500">
                  {errors?.password?.message}
                </span>
              )}
              <p className="absolute right-4 top-[55%]">
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
            <div className="mb-6 relative">
              <label
                htmlFor="confirmPass"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPass", {
                  required: "This input is required.",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/,
                    message:
                      "Password must contain at least one capital letter, one lowercase letter, one special character, and one number.",
                  },
                })}
                type={show ? "text" : "password"}
                id="confirmPass"
                className={`bg-gray-50 border-[.2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary-dark dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Minimum 8 character with a number and special latter"
              />
              {errors?.password && (
                <span className="text-red-500">
                  {errors?.confirmPass?.message}
                </span>
              )}
              <p className="absolute right-4 top-[55%]">
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
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
                onChange={(e) => setValue("remember", e.target.checked)}
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <Link
                to="#"
                className={`${textColor} hover:underline dark:${textColor}`}
              >
                terms and conditions
              </Link>
              .
              {!isChecked && (
                <p className="text-red-500">
                  Please click the terms and conditions link to proceed.
                </p>
              )}
            </label>
          </div>
          <button
            className={`border-[.5px] ${borderColor} w-full px-8 py-2 text-base ${textColor} duration-300 hover:${selectedColor} hover:text-white`}
            disabled={!isChecked}
          >
            Register
          </button>
          <div className="divider my-10">OR</div>
          <div className="w-full flex flex-col gap-5 mb-10 md:mb-0">
            <Button
              className={`relative h-12 w-full origin-top transform border-[.5px] ${borderColor} text-lg ${textColor} before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:${selectedColor}`}
              value="Login With FaceBook"
            ></Button>
            <Button
              className={`relative h-12 w-full origin-top transform border-[.5px] ${borderColor} text-lg ${textColor} before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:${selectedColor}`}
              value="Login With FaceBook"
            ></Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
