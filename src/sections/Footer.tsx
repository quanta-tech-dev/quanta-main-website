'use client';
import React from 'react';
import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/quanta-tech-az/',
      icon: (
        <path
          fill="currentColor"
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
        />
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        />
      )
    },
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <path
          fill="currentColor"
          d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
        />
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <path
          fill="currentColor"
          d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
        />
      )
    }
  ];

  return (
    <footer className="text-white w-full relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#100833] via-[#0a0a20] to-[#1a1a4a]"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23098FD7' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Main content */}
      <section className="relative z-10">
        <div className="custom-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-between items-center py-3 sm:py-5"
          >
            <div className="relative w-[80px] h-[60px] group">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                <Image
                  src="/logo.svg"
                  alt="Quanta logo"
                  width={60}
                  height={55}
                  priority={false}
                />
              </div>
              <div className="absolute inset-3 bg-gradient-to-r from-[#098FD7] to-[#40d4f7] opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>

          <hr className="w-full pb-8 border-gray-600 opacity-30" />

          <div className="w-full flex flex-col lg:flex-row justify-between gap-[3rem] lg:gap-[4rem] pb-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-full flex flex-wrap md:flex-nowrap lg:flex-col gap-8 xl:gap-10">
                <div className="w-full flex flex-col gap-[0.75rem] xl:gap-[1rem]">
                  <div className="flex gap-4 items-center">
                    <span className="text-xl font-semibold bg-gradient-to-r from-[#098FD7] to-[#40d4f7] bg-clip-text text-transparent">
                      Azerbaijan Office
                    </span>
                  </div>
                  <div className="text-sm font-normal text-gray-300 leading-relaxed">
                    Baku, <br /> AZ 00000
                  </div>
                  <div className="text-lg font-normal space-x-2">
                    <a
                      href="mailto:sales@atliq.com"
                      className="text-[#098FD7] hover:text-[#40d4f7] transition-colors duration-300"
                    >
                      sales@atliq.com
                    </a>
                    <span className="text-gray-400">|</span>
                    <a
                      href="tel:+994557601617"
                      className="text-[#098FD7] hover:text-[#40d4f7] transition-colors duration-300"
                    >
                      +994 55 760 16 17
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Links Section */}
            <div className="flex flex-1 flex-wrap sm:flex-nowrap gap-[3rem] justify-between xl:pl-[8rem]">
              {/* Company Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-2xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Company
                </div>
                {[
                  { name: 'About Us', href: '/about-us' },
                  { name: 'Case Studies', href: '/case-studies' },
                  { name: 'Resources', href: '/resources' },
                  { name: 'Careers', href: '/career' },
                  { name: 'Contact us', href: '/contact' }
                ].map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-300 font-normal mb-4 last:mb-0"
                  >
                    <Link
                      href={link.href}
                      className="hover:text-[#098FD7] transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Products Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-2xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Products
                </div>
                {[
                  { name: 'Quanta BI', href: '/products/quanta-bi' },
                  { name: 'Quanta ERP', href: '/products/quanta-erp' },
                  { name: 'Quanta LMS', href: '/products/quanta-lms' },
                  { name: 'Healthcare', href: '/solutions/healthcare' },
                  { name: 'Manufacturing', href: '/solutions/manufacturing' },
                  { name: 'Retail', href: '/solutions/retail' }
                ].map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ x: 5 }}
                    className="text-sm text-gray-300 font-normal mb-4 last:mb-0"
                  >
                    <Link
                      href={link.href}
                      className="hover:text-[#098FD7] transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full sm:w-auto"
              >
                <div className="text-2xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Technologies
                </div>
                <div className="flex flex-row gap-[3rem] xl:gap-[5rem]">
                  <div>
                    {['TensorFlow', 'LangChain', 'spaCy', 'sklearn', 'PyTorch'].map((tech) => (
                      <div key={tech} className="text-sm text-gray-300 font-normal mb-4 last:mb-0 hover:text-[#098FD7] transition-colors duration-300 cursor-default">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="sm:pl-[2rem] pl-0">
                    {['React Native', 'React.js', 'Node.js', 'Laravel', 'Vue.js'].map((tech) => (
                      <div key={tech} className="text-sm text-gray-300 font-normal mb-4 last:mb-0 hover:text-[#098FD7] transition-colors duration-300 cursor-default">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="sm:pl-[2rem] pl-0">
                    {['Python', 'Flutter', 'Next.js', 'Kotlin', '.NET Core'].map((tech) => (
                      <div key={tech} className="text-sm text-gray-300 font-normal mb-4 last:mb-0 hover:text-[#098FD7] transition-colors duration-300 cursor-default">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="text-black bg-white bg-opacity-95 relative z-10">
        <div className="custom-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-8 items-center justify-between my-5"
          >
            <div className="flex sm:flex-row flex-col justify-center items-center py-4 gap-3 sm:gap-12">
              <div className="text-base text-brandDark font-medium">
                Copyright © 2025{' '}
                <span className="text-[#098FD7] font-semibold">Quanta Tech.</span>
              </div>
              <div className="text-base text-brandDark">
                <Link href="/privacy/terms" className="hover:text-[#098FD7] transition-colors duration-300">
                  <span>Terms & Conditions</span>
                </Link>
              </div>
              <div className="text-base text-brandDark">
                <Link href="/privacy/policy" className="hover:text-[#098FD7] transition-colors duration-300">
                  <span>Privacy Policy</span>
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-6 mx-auto sm:mx-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <svg
                    className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300 relative z-10"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#098FD7] to-[#40d4f7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;