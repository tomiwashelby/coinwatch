import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
	return (
		<section className="w-full min-h-screen lg:-mt-10 template">
			<div className='lg:flex lg:flex-row items-center lg:justify-between lg:px-20 lg:py-8 px-4 py-8 sm:p-8 w-full'>
				<div className='text-center lg:text-left'>
					<h2 className='text-lg sm:text-[28px] md:text-4xl tracking-widest lg:tracking-wider font-medium md:leading-tight lg:-mt-16 raleway'>The popularity of cryptocurrency grows everyday, so should your knowledge of it. Stay informed on the status of your favorite cryptos.</h2>
					<h2 className='text-xs sm:tracking-wider md:tracking-widest mt-6 raleway w-full mb-8 lg:leading-relaxed font-extralight'>CoinWatch serves you with comfortable access to information on over a thousand cryptocurrencies. Stay abreast and monitor your portfolio.</h2>
					<Link href={"#coinlist"}><button className='text-center py-4 px-6 w-[80%] bg-teal-900 hover:bg-teal-950 duration-300 from-teal-900 to-teal-950 rounded-md font-bold text-sm sm:text-base'>Explore</button></Link>
				</div>
				<Image src={'/cryptohero.png'} alt='hero' width={350} height={400} className='hidden lg:block'/>
				<Image src={'/mobilehero.png'} alt='hero' width={350} height={400} className='mt-6 lg:mt-0 lg:hidden block mx-auto'/>
			</div>
		</section>
	)
}

export default Hero;