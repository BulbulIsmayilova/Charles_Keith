import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";
import * as Yup from "yup";
import BreadCrumbs from "../components/static/BreadCrumbs";

function Profile() {
  return (
    <main className="pt-[20px]">
      <div className="wrapper">
        <div className="pl-[110px] mb-[40px]">
          <BreadCrumbs txt={"Profile"} />
        </div>
        <div className="w-9/12 mx-auto">
          <h1 className=" uppercase text-[24px] font-semibold text-center mb-[10px]">
            Profile
          </h1>
          <div>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                date: "",
                gender: "",
                number: "",
                shoesize: "",
                location: "",
                addressline1: "",
                addressline2: "",
                state: "",
                city: "",
                zipcode: "",
              }}
            >
              {({ values }) => (
                <Form>
                  <div className="flex flex-col">
                    <div className=" uppercase text-[18px] font-semibold mb-[13px]">
                      My Details
                    </div>
                    <div className="pb-10">
                      <div className="flex flex-wrap w-full">
                        <div className="w-6/12 pr-3">
                          <Field
                            type="text"
                            name="firstname"
                            placeholder="First Name"
                            className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                        </div>
                        <div className="w-6/12 pl-3">
                          <Field
                            type="text"
                            name="lastname"
                            placeholder="Last name"
                            className="w-full outline-none placeholder:text-[#ccc] py-[8px] px-[15px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                        </div>
                        <div className="w-6/12 pr-3 flex gap-2 items-center justify-between pt-[10px]">
                          <span className="text-[.8rem] block w-[120px] font-normal  ">
                            Date of Birth:
                          </span>
                          <Field
                            type="number"
                            name="date"
                            placeholder="Year"
                            className=" outline-none placeholder:text-[#ccc] w-[25%] py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                          <Field
                            type="number"
                            name="date"
                            placeholder="Month"
                            className=" outline-none placeholder:text-[#ccc] w-[25%] py-[10px] px-[6px]  text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                          <Field
                            type="number"
                            name="date"
                            placeholder="Date"
                            className=" outline-none placeholder:text-[#ccc]  w-[25%] py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                        </div>
                        <div className="w-6/12 pl-3 flex items-center pt-[10px] ">
                          <span className="text-[.8rem] block w-[60px] font-normal">
                            Gender:
                          </span>
                          <Field
                            type="text"
                            name="gender"
                            as="select"
                            placeholder="Year"
                            className=" outline-none placeholder:text-[#ccc] w-[25%] py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          >
                            <option value="1"></option>
                            <option value="1">Female</option>
                            <option value="2">Male</option>
                            <option value="3">Prefer not to say</option>
                          </Field>
                        </div>
                        <div className="w-full">
                          <div className="w-6/12 pr-3 flex items-center pt-[10px] ">
                            <span className="text-[.8rem] block w-[160px] font-normal">
                              Contact Number:
                            </span>
                            <Field
                              type="text"
                              name="number"
                              className=" outline-none w-full py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                            />
                          </div>
                        </div>
                        <div className="w-6/12 pr-3 flex items-center pt-[10px] ">
                          <span className="text-[.8rem] block w-[120px] font-normal">
                            Shoes Size:
                          </span>
                          <Field
                            type="text"
                            name="shoesize"
                            as="select"
                            className=" outline-none w-[25%] py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          >
                            <option value="1"></option>
                            <option value="1">36</option>
                            <option value="2">37</option>
                            <option value="3">39</option>
                            <option value="4">40</option>
                            <option value="5">41</option>
                            <option value="6">42</option>
                            <option value="7">43</option>
                          </Field>
                        </div>
                        <div className="w-full mt-[30px] ">
                          <span className="text-[14px] font-semibold  uppercase">
                            Residential address
                          </span>
                        </div>
                        <div className="w-full">
                          <div className="w-6/12 pr-3 flex items-center pt-[10px] ">
                            <span className="text-[.8rem] block w-[160px] font-normal">
                              Location:
                            </span>
                            <Field
                              type="text"
                              name="location"
                              as="select"
                              className=" outline-none w-full py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                            >
                              <option value="1">United State</option>
                              <option value="1">Baku</option>
                              <option value="2">Turkey</option>
                              <option value="3">Sweden</option>
                            </Field>
                          </div>
                        </div>
                        <div className="w-6/12 pr-3 flex items-center pt-[10px] ">
                          <Field
                            type="text"
                            name="addressline1"
                            placeholder="Address Line 1"
                            className=" outline-none w-full placeholder:text-[#ccc] py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                        </div>
                        <div className="w-6/12 pl-3 flex items-center pt-[10px] ">
                          <Field
                            type="text"
                            name="addressline2"
                            placeholder="Address Line 2"
                            className=" outline-none w-full py-[10px] placeholder:text-[#ccc] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                        </div>
                        <div className="w-6/12 pr-3 flex items-center pt-[10px] ">
                          <span className="text-[.8rem] block w-[120px] font-normal">
                            State*:
                          </span>
                          <Field
                            type="text"
                            name="state"
                            as="select"
                            className=" outline-none w-full py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          >
                             <option value="1">Please select a state</option>
                            <option value="1">Arizona</option>
                            <option value="2">Alaska</option>
                            <option value="3">American Samao</option>
                            <option value="4">Georgia</option>
                            <option value="5">Indiana</option>
                          </Field>
                        </div>
                        <div className="w-6/12 pl-3 flex items-center pt-[10px] ">
                          <span className="text-[.8rem] block w-[120px] font-normal">
                            City*:
                          </span>
                          <Field
                            type="text"
                            name="city"
                            as="select"
                            className=" outline-none w-full py-[10px] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          >
                            <option value="1">Please select a city</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3 </option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Field>
                        </div>
                        <div className="w-6/12 pr-3 flex items-center pt-[10px] ">
                          <Field
                            type="number"
                            name="zipcode"
                            placeholder="Zip Code"
                            className=" outline-none w-full py-[10px] placeholder:text-[#ccc] px-[6px] text-[.875rem] block rounded-[5px] mt-2 border border-[#ccc]"
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center py-[30px]"><button className="border border-[#333] bg-[#333] text-[#fff] uppercase rounded-[5px] font-normal py-[.625rem] px-[.937rem] text-[.8rem] hover:bg-[#000]">Save My Details</button></div>
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

export default Profile;
