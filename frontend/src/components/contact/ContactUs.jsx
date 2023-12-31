import React from "react";
import Getintouch from "./Getintouch";
import kachaPakh from "../../assets/kachaPakh.png";
import axios from "axios";
import { IoIosContact } from "react-icons/io";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { toast } from "react-toastify";
import { validationSchema } from "./Schema";
import { useFormik } from "formik";

const ContactUs = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values, action) => {
        const res = await axios.post("/contact", values);
        if (res.status === 201) {
          toast.success("Sent successfully");
          action.resetForm();
        }
      },
    });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div>
      {/* Contact Us section open */}
      <div
        style={{ backgroundImage: `url(${kachaPakh})` }}
        className="relative w-full h-32 sm:h-52 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div className=" absolute text-white text-4xl font-bold  pt-10 sm:pt-20 md:pl-20 pl-10 ">
          <h1 className=""> Contact Us </h1>
          <div className=" w-24 h-1 bg-red-500 rounded-full mt-3 "></div>
        </div>
      </div>
      {/* Contact Us section Closed */}
      <section className="py-10">
        {/* Getintouch render start  */}
        <div className=" grid   md:grid-cols-2 p-[1rem]  ">
          <div className=" place-content-center  md:ml-[5rem] ">
            <Getintouch />
          </div>
          {/* Getintouch render end  */}

          {/* Contact form start  */}
          <div className="  flex flex-col  ">
            <div className=" sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-gray-50 pt-6 px-4 drop-shadow-xl sm:rounded-lg sm:px-10">
                <form
                  onSubmit={handleSubmit}
                  onKeyDown={handleKeyDown}
                  className="space-y-6 py-4"
                >
                  <h1 className="text-2xl font-semibold text-gray-700 text-center">
                    Contact Us
                  </h1>

                  {/* Input for Name */}

                  <div>
                    <div className="flex justify-center items-center shadow-md overflow-hidden bg-white border-b border-blue-200 rounded-md    mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Name"
                        required
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 placeholder-gray-400 focus:outline-none sm:text-sm"
                      />
                      <IoIosContact className="text-gray-400 m-2" />
                    </div>
                    {touched.name && errors.name ? (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    ) : null}
                  </div>

                  {/* Input for Phone */}

                  <div>
                    <div className="flex justify-center items-center shadow-md overflow-hidden bg-white border-b border-blue-200 rounded-md    mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="off"
                        placeholder="Phone"
                        required
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 placeholder-gray-400 focus:outline-none   sm:text-sm"
                      />
                      <AiOutlinePhone className="text-gray-400 m-2" />
                    </div>
                    {touched.phone && errors.phone ? (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    ) : null}
                  </div>

                  {/* Input for Email */}

                  <div>
                    <div className="flex justify-center items-center shadow-md overflow-hidden bg-white border-b border-blue-200 rounded-md    mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        required
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2     placeholder-gray-400 focus:outline-none   sm:text-sm"
                      />
                      <AiOutlineMail className="text-gray-400 m-2" />
                    </div>
                    {touched.email && values.email ? (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    ) : null}
                  </div>

                  {/* Input for Message */}

                  <div>
                    <div className="mt-1 shadow-md">
                      <textarea
                        className="appearance-none block w-full px-3 py-2 border-b border-blue-100 rounded-md shadow-md placeholder-gray-400 focus:outline-none  sm:text-sm"
                        id="message"
                        name="message"
                        rows="5"
                        autoComplete="message"
                        required
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    {touched.message && errors.message ? (
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    ) : null}
                  </div>

                  <div className="my-5">
                    <button
                      type="submit"
                      className="w-full  my-5  py-2 px-4 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Contact form end  */}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
