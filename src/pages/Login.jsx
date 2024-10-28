import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  return (
    <main className="py-[60px]">
      <div className="wrapper">
        <h2 className="text-center uppercase text-[18px] font-semibold leading-5">
          Sign in/Create an account
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:px-[220px] pt-6">
          <div className="p-[1.25rem] border border-[#ccc] max-h-[360px] lg:max-w-[480px] rounded-md pt-8  w-full max-w-[350px] lg:m-auto ">
            <div className="pb-[15px]">
              <h6 className="text-[18px] font-semibold uppercase text-center mb-[15px]">
                Sign in
              </h6>
              <p className="text-[.75rem] font-normal ">
                Sign in for a faster checkout experience and to enjoy membership
                privileges.
              </p>
            </div>
            <div className="py-2">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .required("This field is required")
                    .email("Invalid email address"),
                password: Yup.string()
                    .required("This field is required")
                    .min("Please match the requested format"),
                })}
              >
                {({ values }) => (
                  <Form>
                    <Field
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      className="w-full outline-none border border-[#ccc] p-2 rounded-[5px] block m-auto placeholder:text-[.8rem] placeholder:text-[#ccc] placeholder:font-normal"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-[10px] text-end"/>

                    <Field
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="w-full outline-none border mt-[30px] border-[#ccc] p-2 rounded-[5px] block m-auto placeholder:text-[.8rem] placeholder:text-[#ccc] placeholder:font-normal"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-[10px] text-end" />
                  </Form>
                )}
              </Formik>
              <div className="flex flex-col py-[15px]">
                <button className=" hover:bg-[#000] duration-75 border border-[#333] bg-[#333] rounded-[5px] uppercase text-white leading-5 py-[.625rem] px-[.9375rem] text-[.8rem]">Sign in</button>
                <button className="text-[#999] underline text-[.8rem] font-normal pt-[10px]">Forgot your password?</button>
              </div>
            </div>
          </div>
          <div className="p-[1.25rem] border border-[#ccc] min-h-[360px] lg:max-w-[480px] rounded-md pt-8 w-full pb-[100px] max-w-[350px] lg:m-auto">
            <h6 className="uppercase text-[18px] font-semibold text-center mb-[11px]"> 
              Create an Account
            </h6>
            <p className="mt-[15px] text-[.75rem] font-normal leading-6">
              Unlock <b>10% off*!</b> Subscribe for style updates & exclusive
              offers.
            </p>
            <Link to='/us/create-account'><button className="border border-[#000] uppercase mt-[90px] bg-white text-[#000] rounded-[5px] w-[100%] py-[.625rem] px-[.9375rem] text-[.8rem] hover:bg-[#000] hover:text-white duration-75">Create an Account</button></Link> 
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
