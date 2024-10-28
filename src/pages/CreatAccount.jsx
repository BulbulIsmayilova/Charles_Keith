import React, { useEffect } from "react";
import BreadCrumbs from "../components/static/BreadCrumbs";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../store/api";
import { toast, ToastContainer } from "react-toastify";

function CereatAccount() {
  const [registerUser, { data, isSuccess, error,isError, isLoading }] = useRegisterUserMutation();

  function handleSubmit(value) {
    let obj = {
      name: "Username",
      username: "Username",
      phone: String(1234566892345556677),
      gender: "FEMALE",
      email: value.email,
      address: "123 Main St",
      dob: "1990-01-01T00:00:00Z",
      password: value.password,
    };
    registerUser(obj)
  }

  useEffect(() => {
    if(isSuccess){
      toast.success("Ugurla qeydiyyatdan kecdiniz!")
      localStorage.setItem("token", JSON.stringify(data.token))
      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("wish", JSON.stringify([]))
    }
    if(isError){
      console.log(error)
      toast.error("Emeliyyat ugursuz oldu!")
    }
  }, [data, isSuccess, isError, isLoading])

  return (
    <main>
      <ToastContainer />
      <div>
        <div className="wrapper">
          <div className="mt-[15px] ml-5">
            <BreadCrumbs txt={"Create an Account"} />
          </div>
          <div className="flex justify-center items-center pt-10 pb-[100px] max-w-[425px] m-auto">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .required("This field is required")
                  .email("Invalid email address"),
                password: Yup.string().required("This field is required"),
              })}
              onSubmit={(values) => handleSubmit(values)}
            >
              {({ values }) => (
                <Form>
                  <div>
                    <div className="text-center mb-[15px] py-2">
                      <h2 className="uppercase text-[22px] font-medium mb-[30px]">
                        Create an Account
                      </h2>
                      <p className="text-[.8rem] font-normal pt-[15px]">
                        Unlock
                        <b>
                          10% off <sup>*</sup>
                        </b>
                        ! Subscribe for style updates & exclusive offers.
                      </p>
                    </div>
                    <div className="py-2">
                      <Field
                        type="email"
                        placeholder="Email Address"
                        className="w-full outline-none placeholder:text-[#ccc] placeholder:font-normal p-3 block m-auto rounded-[5px] mt-[6px] border border-[#ccc]"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error text-red-500 text-[10px] text-end"
                      />
                    </div>
                    <div className="py-2">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full outline-none placeholder:text-[#ccc] placeholder:font-normal p-3 block m-auto rounded-[5px] mt-[6px] border border-[#ccc]"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error text-red-500 text-[10px] text-end"
                      />
                    </div>
                    <div className="pb-2">
                      <p className="text-end text-[10px] text-[#999]">
                        Password must be at least 8 characters consisting of
                        upper and lower case letters, <br /> with at least one
                        number.
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="text-[.8rem] font-normal flex justify-between px-[10px]">
                        <div className="w-[5%]">
                          <input
                            className="w-5 h-5 border-[#ccc]"
                            type="checkbox"
                          />
                        </div>
                        <p className="w-[93%]">
                          I am 18+ years old, and agree to CHARLES & KEITH’s
                          Terms & Conditions and Privacy Policy.
                        </p>
                      </div>
                      <div className="text-[.8rem] font-normal flex justify-between px-[10px]">
                        <div className="w-[5%]">
                          <input
                            className="w-5 h-5 border-[#ccc]"
                            type="checkbox"
                            name=""
                            id=""
                          />
                        </div>
                        <p className="w-[93%]">
                          Tick this box to get 10% off* when you subscribe to
                          our newsletter.
                        </p>
                      </div>
                    </div>
                    <div className="py-2">
                      <button
                        type="submit"
                        className="w-full uppercase p-[10px] rounded-[5px] bg-[#333] text-white"
                      >
                        Create an Account
                      </button>
                    </div>
                    <div className="flex flex-col justify-center items-center py-2">
                      <p className="text-[.8rem] font-normal pt-[15px]">
                        Already have an account?{" "}
                        <span className="cursor-pointer underline ">
                          <Link to="/us/login">Sign In</Link>
                        </span>
                      </p>
                      <p className="text-[.8rem] font-normal pt-[15px]">
                        *Valid for a one-time order when you subscribe for the
                        first time.
                      </p>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CereatAccount;
