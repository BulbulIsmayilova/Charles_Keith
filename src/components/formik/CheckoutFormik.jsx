import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function CheckoutFormik() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        adressline1: "",
        adressline2: "",
        zipcode: "",
        number: "",
        state: "",
        city: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Please enter your first name"),
        lastname: Yup.string().required("Please enter your last name"),
        adressline1: Yup.string().required("Please enter an address"),
        zipcode: Yup.string().required("Please enter a zip code"),
        number: Yup.string().required("Please enter a contact number"),
        state: Yup.string().required("Please select a state"),
        city: Yup.string().required("Please select a city"),
      })}
    >
      {({ values }) => (
        <Form>
          <div className="mt-[30px]">
            <div className="text-[.875rem] font-semibold tracking-wider uppercase">
              Delivery address
            </div>
            <div className="text-[#999] text-[.875rem] my-[15px] font-normal text-left">
              * These fields are required.
            </div>
            <div>
              <div className="w-full flex justify-between gap-8">
                <div className="w-[50%] ">
                  <Field
                    type="text"
                    name="name"
                    placeholder="First Name*"
                    className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-[red] font-normal text-[.7rem] text-end"
                  />
                </div>
                <div className="w-[50%]">
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Last Name*"
                    className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem]   block rounded-[5px] mt-2 border border-[#ccc]"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-[red] font-normal text-[.7rem] text-end"
                  />
                </div>
              </div>
            </div>
            <div className="my-[20px]">
              <div className="text-[.875rem] font-normal">
                <b className=" tracking-wider text-[1rem] ">Location:</b> United
                States Of America (EN)
              </div>

              <div className="w-[100%] mt-[15px] ">
                <Field
                  type="text"
                  name="adressline1"
                  placeholder="Address Line 1*"
                  className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                />
                <ErrorMessage
                  name="adressline1"
                  component="div"
                  className="text-[red] font-normal text-[.7rem] text-end"
                />
              </div>
              <div className="w-[100%] mt-[15px]">
                <Field
                  type="text"
                  name="adressline2"
                  placeholder="Address Line 2"
                  className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-wrap justify-between">
                <div className="flex md:w-6/12 w-full md:pr-2">
                  <span className="font-normal pt-4 w-14 md:w-auto text-[.875rem] pr-2">
                    State*:
                  </span>
                  <div className="w-[100%]">
                    <Field
                      type="text"
                      name="state"
                      as="select"
                      placeholder="Please select a state"
                      className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                    >
                      <option value="">Please select a state</option>
                      <option value="salam">salam</option>
                      <option value="salam">salam</option>
                      <option value="salam">salam</option>
                      <option value="salam">salam</option>
                    </Field>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="text-[red] font-normal text-[.7rem] text-end"
                    />
                  </div>
                </div>
                <div className="flex md:w-6/12 w-full md:pl-2 items-center">
                  <span className="font-normal w-14 md:w-auto text-[.875rem] pr-2">
                    City*:
                  </span>
                  <div className="w-[100%]">
                    <Field
                      type="text"
                      name="city"
                      as="select"
                      placeholder="Please select a state"
                      className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                    >
                      <option value="">Please select a city</option>
                      <option value="salam1">salam</option>
                      <option value="salam2">salam</option>
                      <option value="salam3">salam</option>
                      <option value="salam4">salam</option>
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-[red] font-normal text-[.7rem] text-end"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="md:w-[50%] w-full pt-[20px] md:pr-4">
                  <Field
                    type="text"
                    name="zipcode"
                    placeholder="Zip Code*"
                    className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                  />
                  <ErrorMessage
                    name="zipcode"
                    component="div"
                    className="text-[red] font-normal text-[.7rem] text-end"
                  />
                </div>
                <div>
                  <button
                    className="uppercase duration-[.3s] bg-[#333] py-[.625rem] px-[.9375rem] hover:bg-[#000]  font-normal text-[0.775rem] rounded-[5px] block w-[auto] mr-auto ml-auto mt-[40px] mb-[33px] border border-[#333] text-white"
                    type="submit"
                  >
                    Continue to payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CheckoutFormik;
