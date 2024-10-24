import React from "react";
import  {FlipWords}  from "../UI/flip-words";

const FlipWordsDemo = () => {
  const words = ["elegant", "luxurious", "stylish", "timeless"];

  return (
    <div className="pt-16">
      <div
        className="relative h-[40rem] flex justify-center items-center px-4"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/bd2170_d6299eeaa1c94c7094eeb547fcdd41f8~mv2_d_6024_2008_s_2.jpg/v1/fill/w_1899,h_845,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bd2170_d6299eeaa1c94c7094eeb547fcdd41f8~mv2_d_6024_2008_s_2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-4xl mx-auto font-normal text-white dark:text-neutral-400">
          We like
          <FlipWords words={words} /> <br />
          like bridal dresses.
        </div>
      </div>
    </div>
  );
};

export default FlipWordsDemo;