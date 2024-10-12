'use client'

import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SiGithub, SiInstagram, SiX, SiGmail } from 'react-icons/si';
import send_btn from '../../../public/send-outline (1).svg';
import Image from 'next/image';
import emailjs from 'emailjs-com';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false); // Controls error display

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    setShowErrors(true); // Show errors

    // Hide errors after 5 seconds
    setTimeout(() => {
      setShowErrors(false);
    }, 5000);

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      emailjs.sendForm(
        'service_m6s51xy',
        'template_22xp289',
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
        .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' }); // Clear form
        })
        .catch((error) => {
          console.error(error.text);
          alert('Error sending message, please try again.');
        });
    }
  };

  return (
    <section id="contact" className="container px-10 pt-20 mb-20 relative">
      <div
        className="mb-14"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <SectionTitle title="CONTACT" />
      </div>

      <div className="flex lg:flex-row flex-col-reverse justify-between relative z-10">
        {/* Contact Form */}
        <div className="flex flex-col">
          <form onSubmit={sendEmail} className="space-y-6 lg:w-[28rem] w-full">
            <div
              className="flex items-center gap-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <label className="block text-customBlue mb-2 text-sm md:text-base">NAME:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-7 p-2 bg-transparent border-2 text-sm border-customBlue text-white outline-none"
              />
            </div>
            {showErrors && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <div
              className="flex items-center gap-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1400"
            >
              <label className="block text-customBlue mb-2 text-sm md:text-base">EMAIL:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-7 p-2 bg-transparent border-2 text-sm border-customBlue text-white outline-none"
              />
            </div>
            {showErrors && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1600">

            <div>
              <label className="block text-customBlue mb-3 text-sm md:text-base">MESSAGE:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-48 p-2 bg-transparent border-2 text-sm border-customBlue text-white resize-none outline-none"
              />
            </div>
            {showErrors && errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-3 px-8 md:px-16 py-2 mt-4 bg-customBlue text-black text-base md:text-lg font-medium hover:bg-opacity-80 transition duration-300"
            >
              <Image src={send_btn} alt="send" width={1000} height={1000} className="w-4 h-4 md:w-6 md:h-6" />
              <span>SEND</span>
            </button>
            </div>
          </form>
        </div>

        {/* Social Links and Message */}
        <div
          className="flex lg:flex-col md:flex-row flex-col justify-between items-center lg:items-end z-10 relative mb-20 lg:mb-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <p className="mb-10 md:mb-0 lg:mb-6 text-sm lg:text-xl xl:text-2xl text-customWhite text-center md:text-left lg:text-right font-medium max-w-64 lg:max-w-96 xl:max-w-[32rem]">
            GOT ANY PROJECTS YOU WANT TO WORK ON? WANT TO COLLAB? THEN DON'T HESITATE TO GET IN TOUCH
            <br />
            <br />
            I LOOK FORWARD TO HEARING FROM YOU!
          </p>

          <div className="flex flex-col gap-7">
            <div className="flex md:flex-row flex-col gap-7 items-center justify-center">
              <a
                href="https://github.com/Tobi-Oladele"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg justify-center w-44 py-2 bg-customBlue hover:bg-opacity-80 transition duration-300"
              >
                <SiGithub size={25} className="mr-2" /> GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg justify-center w-44 py-2 bg-customBlue hover:bg-opacity-80 transition duration-300"
              >
                <SiInstagram size={25} className="mr-2" /> Instagram
              </a>
            </div>
            <div className="flex gap-7 md:flex-row flex-col items-center justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg justify-center w-44 py-2 bg-customBlue hover:bg-opacity-80 transition duration-300"
              >
                <SiX size={25} className="mr-2" /> Twitter
              </a>
              <a
                href="mailto:Oladelebee@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-lg justify-center w-44 py-2 bg-customBlue hover:bg-opacity-80 transition duration-300"
              >
                <SiGmail size={25} className="mr-2" /> E-Mail
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[45rem] h-[45rem] absolute -right-[20rem] -bottom-16 select-none">
        <Image src="/radial-blur.png" alt="" width={1000} height={1000} className="w-full h-full object-contain" />
      </div>
    </section>
  );
};
