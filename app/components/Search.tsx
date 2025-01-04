import React from 'react';

const Search = ({value, onChange}:{value:any, onChange:any}) => {
	return (
		<div className="flex justify-center">
			<input
				type="text"
				placeholder='Enter search query'
				className='text-xs md:text-sm focus:outline-none text-teal-900 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-md py-2 px-8 raleway mt-6 flex border border-teal-950 focus:border-2 duration-200'
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default Search;