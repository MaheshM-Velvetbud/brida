"use client";
import React from "react";

import Brand from "@/app/Components/Brand/Brand"


const SparklesPreview = () => {
  return (
    <section>
    <div className="h-[40rem] w-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center overflow-hidden rounded-md" style={{ backgroundImage: 'url("https://images8.alphacoders.com/106/1060380.jpg")' }}>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <h1 className="md:text-6xl text-3xl lg:text-8xl font-bold text-center text-white relative z-20">
        About Us
      </h1>
      <p className="md:text-xl text-xl lg:text-xl text-center text-white relative z-20 pb-8">
       
Our products include bridal dresses, shoes, tiaras, boleros and an extensive range of mens formalwear
      </p>
      <div className="w-[40rem] h-40 relative z-20">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
    

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

    </div>


    <section className="">
      

<Brand/>

	
</section>
<section
  className="bg-cover bg-center py-64 pt-12"
  style={{ backgroundImage: "url('https://dawnelizabethstudios.com/wp-content/uploads/2020/09/Bridal-Session-at-The-McNay-Formanek-Dawn-Elizabeth-Studios-0011.jpg')" }}
>
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
			<div className="flex space-x-2 sm:space-x-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.236l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>

				<div className="space-y-2">
					
					<p className="leading-snug">The Wedding Shop Dubai, is the regions leading bridal boutique with an extensive range of ready-to-wear bridal gowns and accessories from the worlds leading fashion houses.</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.236l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>

				<div className="space-y-2">
				
					<p className="leading-snug">Since 2002, this family run boutique has prided itself on providing the best possible service and a relaxed atmosphere for each and every bride. Our collection of over 200 dresses is the regions largest, creating ultimate choice for brides to be.</p>
				</div>
			</div>
			<div className="flex space-x-2 sm:space-x-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.236l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>

				<div className="space-y-2">
					
					<p className="leading-snug">To complement your dress our buying team has identified bridal accessories from Spain, Germany, Canada, USA and UK, to add the final touches to your overall look.</p>
				</div>
				
			</div>
		</div>
		
	</div>
</section>
</section>


  );
};

export default SparklesPreview;
