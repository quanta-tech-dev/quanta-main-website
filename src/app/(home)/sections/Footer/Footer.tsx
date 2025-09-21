'use client';
import React from 'react';
import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks } from '@/app/data/socialLinks';

const Footer = () => {

  return (
    <footer className="text-white w-full relative overflow-hidden">
      {/* Main content */}
      <section className="relative z-10 bg-gradient-to-br from-[#100833] via-[#0a0a20] to-[#1a1a4a] overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23098FD7' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="custom-layout relative z-10">
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
                    Baku, <br /> AZ 1033
                  </div>
                  <div className="text-lg font-normal space-x-2">
                    <a
                      href="mailto:info@quanta.com"
                      className="text-[#098FD7] hover:text-[#40d4f7] transition-colors duration-300"
                    >info@quanta.com</a>
                    <span className="text-gray-400">|</span>
                    <a
                      href="tel:+994505504080"
                      className="text-[#098FD7] hover:text-[#40d4f7] transition-colors duration-300"
                    >
                      +994 50 550 40 80
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
      <section className="text-black bg-white relative z-10">
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