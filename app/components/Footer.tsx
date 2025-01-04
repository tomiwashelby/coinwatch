import React from 'react';
import { FaCopyright } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='mt-8 py-6 px-4 bg-teal-950 inter cursor-default'>
			<h1 className='text-center mb-1'>Developed by <Link href={'/tomiwatolugbemi@gmail.com'} className='cursor-pointer'>TOMIWA TOLUGBEMI</Link></h1>
			<span className='flex items-center justify-center raleway'><FaCopyright className='mr-2' />2024</span>
		</div>
	)
}

export default Footer