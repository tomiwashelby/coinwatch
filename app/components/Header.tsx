import React from 'react';
import { FaRegCompass } from "react-icons/fa";
import Link from 'next/link';

function Header() {
	return (
		<header className='flex items-center justify-between p-4 sm:px-10 sm:py-6 shadow-sm template'>
			<Link href={'/'} className='flex items-center gap-2'>
				<FaRegCompass className='text-2xl sm:text-3xl md:text-4xl text-teal-700'/>
				<span className='tracking-widest text-[15px] sm:text-lg md:text-xl lg:text-2xl font-semibold'>CoinWatch</span>
			</Link>
			<Link target='_blank' href={'https://wa.me/message/3UVT3KRR5DNZN1'} className='px-4 py-[6px] bg-white text-teal-800 hover:bg-gray-100 duration-200 rounded-[4px] text-xs sm:text-sm font-medium inter'>Developer</Link>
		</header>
	)
}

export default Header