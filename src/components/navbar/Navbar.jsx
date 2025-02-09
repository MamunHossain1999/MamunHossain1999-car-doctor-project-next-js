"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <div className='hidden md:flex gap-4 items-center'>
          <IoBagOutline size={24} />
          <FaSearch size={24} color="gray" />
          <button className='btn outline outline-[#FF3811] text-[#FF3811] rounded-md py-2 px-4'>
            Appointment
          </button>
        </div>
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-8 6h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden  text-black p-4 space-y-4">
          <Link href="/" className="block ">Home</Link>
          <Link href="/about" className="block ">About</Link>
          <Link href="/services" className="block">Services</Link>
          <Link href="/blog" className="block ">Blog</Link>
          <Link href="/contact" className="block ">Contact</Link>
          <div className='flex gap-4 items-center'>
            <IoBagOutline size={24} />
            <FaSearch size={24} color="gray" />
            <button className='btn outline outline-[#FF3811] text-[#FF3811] rounded-md py-2 px-4'>
              Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
