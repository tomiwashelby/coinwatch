import React from 'react';
import { ImSearch } from "react-icons/im";

const Search = ({value, onChange}:{value:any, onChange:any}) => {
	return (
		<div className='flex flex-col items-center mt-8 template'>
			<h2 className='text-sm'>Make your crypto search.</h2>
			<div className="flex items-center px-5 mt-6 bg-white w-full sm:w-[460px] lg:w-[45%] sm:rounded-full md:gap-6 md:px-6">
				<input
					type="text"
					placeholder='Enter search query'
					className='text-xs md:text-sm focus:outline-none text-teal-950 w-full py-2 raleway'
					value={value}
					onChange={onChange}
				/>
				<button className=''>
					<ImSearch className='text-md text-teal-900 hover:text-teal-800' />
				</button>
			</div>
			<div className="flex justify-center">
				<div className='grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 md:gap-6 lg:gap-14'>
					
				</div>
			</div>
		</div>
	)
}

export default Search