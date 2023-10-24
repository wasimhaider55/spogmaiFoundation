import React, { useState } from "react";
import Getintouch from "./Getintouch";
import kachaPakh from "../../assets/kachaPakh.png";
import { IoIosContact } from "react-icons/io";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

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
                  className="space-y-6 py-4"
                  action="https://getform.io/f/c3f8e7f4-7a2e-453b-a3e9-e76833c37731"
                  method="POST"
                >
                  <h1 className="text-2xl font-semibold text-gray-700 text-center">
                    Contact Us
                  </h1>
                  <div>
                    <div className="flex justify-center items-center shadow-md overflow-hidden bg-white border-b border-blue-200 rounded-md    mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        placeholder="Name"
                        required
                        value={name}
                        className="w-full px-3 py-2 placeholder-gray-400 focus:outline-none sm:text-sm"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <IoIosContact className="text-gray-400 m-2" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center shadow-md overflow-hidden bg-white border-b border-blue-200 rounded-md    mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="textj"
                        autoComplete="off"
                        placeholder="Phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2     placeholder-gray-400 focus:outline-none   sm:text-sm"
                      />
                      <AiOutlinePhone className="text-gray-400 m-2" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-center items-center shadow-md overflow-hidden bg-white border-b border-blue-200 rounded-md    mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2     placeholder-gray-400 focus:outline-none   sm:text-sm"
                      />
                      <AiOutlineMail className="text-gray-400 m-2" />
                    </div>
                  </div>

                  <div>
                    <div className="mt-1 shadow-md">
                      <textarea
                        className="appearance-none block w-full px-3 py-2 border-b border-blue-100 rounded-md shadow-md placeholder-gray-400 focus:outline-none  sm:text-sm"
                        id="message"
                        name="message"
                        rows="5"
                        autoComplete="message"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
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
