import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y shadow-2xl">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
  <a rel="noopener noreferrer" href="#" className="flex items-center space-x-3">
    <div className="flex items-center justify-center w-32 h-12 rounded-full lg:w-33 lg:h-12">
    <Image
        src="/images/logo.png"
        alt="Logo"
        width={128} // Add a width based on the size you want
        height={48} // Add a height based on the size you want
        className="rounded-full" // You can keep the r
      />
    </div>
  </a>
</div>


          <div className="grid grid-cols-2 text-black text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3 text-black ">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Products</h3>
              <ul className="space-y-1">
                <li><a rel="noopener noreferrer" href="/dataanalytics">  design</a></li>
                <li><a rel="noopener noreferrer" href="/web">design </a></li>
                <li><a rel="noopener noreferrer" href="/database">design </a></li>
              </ul>
            </div>

            <div className="space-y-3 text-black ">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
              <ul className="space-y-1">
                <li><a rel="noopener noreferrer" href="/privacy">Privacy</a></li>
                <li><a rel="noopener noreferrer" href="/terms&condition">Terms of Service</a></li>
              </ul>
            </div>

            <div className="space-y-3 text-black ">
              <h3 className="uppercase dark:text-gray-900">Features</h3>
              <ul className="space-y-1">
                <li><a rel="noopener noreferrer" href="/solution">design</a></li>
                <li><a rel="noopener noreferrer" href="/solution">design</a></li>
                <li><a rel="noopener noreferrer" href="/solution">design</a></li>
              </ul>
            </div>

           
            <div className="space-y-3 text-black ">
  <h3 className="uppercase dark:text-gray-900">Social Media</h3>
  <div className="flex space-x-3">
    <a rel="noopener noreferrer" href="https://in.linkedin.com/company/velvetbud" title="LinkedIn" className="p-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#0077B5" viewBox="0 0 32 32" className="w-6 h-6">
        <path d="M28.2 0H3.8C1.7 0 0 1.7 0 3.8v24.4C0 30.3 1.7 32 3.8 32h24.4c2.1 0 3.8-1.7 3.8-3.8V3.8C32 1.7 30.3 0 28.2 0zM10.2 27H5.6V11.4h4.6V27zM7.9 9.7c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7zm19.5 17.3h-4.6v-8.6c0-2.1-.4-3.8-2.4-3.8-2.4 0-3.4 1.7-3.4 3.4v9h-4.6V11.4h4.6v2c1.7-2.5 4.8-2.5 6.9-2.5 4.2 0 7.1 2.7 7.1 8.6V27z"></path>
      </svg>
    </a>
    <a rel="noopener noreferrer" href="https://x.com/thevelvetbud" title="Twitter" className="p-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#1DA1F2" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
      </svg>
    </a>
    <a rel="noopener noreferrer" href="https://www.instagram.com/velvetbudtech/" title="Instagram" className="p-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#C13584"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M7.6 2C4.2 2 2 4.2 2 7.6v8.8C2 19.8 4.2 22 7.6 22h8.8c3.4 0 5.6-2.2 5.6-5.6V7.6C22 4.2 19.8 2 16.4 2H7.6zM12 15.6a3.6 3.6 0 1 1 3.6-3.6A3.6 3.6 0 0 1 12 15.6zM16.4 10.8a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM12 8.4a3.6 3.6 0 1 0 3.6 3.6A3.6 3.6 0 0 0 12 8.4zm0 6.8a3.6 3.6 0 1 1 3.6-3.6 3.6 3.6 0 0 1-3.6 3.6z" />
  </svg>
</a>

  </div>
</div>



          </div>
        </div>
		<div className="py-6 text-sm text-center ">©2024 . All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;
