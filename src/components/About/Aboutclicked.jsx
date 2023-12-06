import React from "react";

export const Aboutclicked = () => {
  return (
    <div className=" flex fixed top-0 left-0 w-full h-full bg-white z-100">
      <h1 className=" text-[#b31616] text-[6vh] pl-[5vh] mb-[2vh]">
        &lt;
        <span className="text-white font-semibold">About</span>&gt;
      </h1>
      <div className="mb-20 p-10 w-[55vw] rounded-2xl text-center bg-black bg-opacity-40 backdrop-blur-md">
        <p className="relative text-4xl text-white font-thin opacity-100">
          <span className="text-[#b31616] font-semibold ">Hey</span> there 👋,
          I'm
          <span className="font-bold"> Muhammad Awab Saghir</span>, a
          17-year-old budding coder hailing from the vibrant tech scene of{" "}
          <span className="text-[#b31616] font-semibold ">Pakistan</span>. My
          journey in the world of computers and technology has been nothing
          short of thrilling, fueled by a genuine passion for all things
          digital.
        </p>
      </div>
    </div>
  );
};
