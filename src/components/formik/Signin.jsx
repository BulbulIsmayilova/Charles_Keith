import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useLoginUserMutation } from "../../store/api";
import { toast, ToastContainer } from "react-toastify";

function Signin({account,SetAccount}) {
  const [loginUser, {data, isSuccess, isError}] = useLoginUserMutation()

  useEffect(() => {
    if(isSuccess){
      toast.success("Success")
      localStorage.setItem("token", JSON.stringify(data.token))
      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("wish", JSON.stringify([]))
      window.location.reload()
    }
    if(isError){
      toast.error("Invalid username or password")
    }
  }, [data, isSuccess, isError])

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("This field is required"),
        password: Yup.string()
          .required("This field is required")
      })}
      onSubmit={(values) => {
        loginUser(values)
      }}
    >
      {({ values }) => (
        <Form>
          <ToastContainer />
          <div className="p-5 flex flex-col items-center">
            <div className="w-full">
              <h4 className=" uppercase text-center text-black leading-[1.25] font-medium text-[14px]">
                Sign in
              </h4>
              <p className="text-black font-normal pt-[5px] pb-[15px] text-center">
                Password details are case sensitive.
              </p>
            </div>
            <div className="w-full">
              <Field
                type="text"
                id="email"
                name="username"
                placeholder="Username"
                className="w-full outline-none placeholder:text-[#ccc] p-[10px] block rounded-[5px] mt-2 border border-[#ccc]"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-[red] font-normal text-end"
              />
            </div>
            <div className="w-full">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-full outline-none placeholder:text-[#ccc] p-[10px] block rounded-[5px] mt-2 border border-[#ccc]"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-[red] font-normal text-end"
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <button className="uppercase duration-[.3s] bg-[#333] p-3 font-normal mt-5 text-[0.775rem] rounded-[5px] block w-full border border-[#333] text-white" type="submit">
                Sign In
              </button>
              <button type="button" className="underline bg-white text-[#999] font-normal text-[12px] pt-[10px] pb-5">Forgot your password?</button>
              <Link className="block w-full" to="/us/create-account">
                <button type="button" className="duration-[.3s] font-light border border-[#333] w-full block py-[11px] px-[30px] uppercase bg-white rounded-[5px]">Create an account</button>
              </Link>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Signin;
