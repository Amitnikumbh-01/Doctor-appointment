import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=' md:mx-10'>
      <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left Section */}
        <div>
          <img className=' mb-5 w-40 ' src={assets.logo}></img>
          <p className=' w-full md:w-2/3 text-gray-600 leading-6'>An online doctor appointment system simplifies healthcare access by enabling digital booking, teleconsultations, reminders, and secure payments, enhancing convenience for patients and efficiency for providers
          </p>

        </div>
        {/* center Section */}
        <div>
          <p className=' text-xl font-medium mb-5'>COMPANY</p>
          <ul className=' flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>

        </div>

        {/* right Section */}
        <div>
          <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className=' flex flex-col gap-2 text-gray-600'>
            <li>+1-234-456-6789</li>
            <li>amit@1234gmail.com</li>
          </ul>

        </div>
      </div>
      {/* comment */}
      <div>
        <hr />
        <p className=' py-5 text-sm  text-center'>Copyright 2024@ Prescripto - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
