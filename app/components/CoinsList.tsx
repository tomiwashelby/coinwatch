'use client';
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import { useState } from 'react';
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const CoinsList = ({coins}:any) => {
	const tableHeads = ['Rank', 'Coin', 'Price', '24H', 'Market Cap'];
	const [search, setSearch] = useState('');
	const [filteredCoins, setFilteredCoins] = useState([]);

	interface Coin {
		id: string;
		rank: number;
		icon: string;
		name: string;
		symbol: string;
		price: number;
		priceChange1d: number;
		marketCap: number;
	}

	const handleSearch = (e:any) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		setFilteredCoins(coins.filter((coin:any) => coin.name.toLowerCase().includes(search.toLowerCase())));
	}, [search, coins]);

	const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCoins = filteredCoins.slice(startIndex, endIndex);
	const totalPages = Math.ceil(filteredCoins.length / itemsPerPage);

	return (
		<section className="template py-8" id='coinlist'>
			<h2 className='text-sm text-center'>Make your crypto search.</h2>
			<Search value={search} onChange={handleSearch}/>
			<div className='mt-12 overflow-x-auto flex justify-center'>
				{paginatedCoins.length > 0 && <table className='w-full md:w-[95%] shadow-2xl border border-teal-900 inter'>
					<thead>
						<tr>
							{
								tableHeads.map((tableHead:string, i:number) => (
									<th className='bg-teal-950 text-[10px] md:text-xs lg:text-sm  border border-solid border-teal-900 p-1 font-semibold' key={i}>{tableHead}</th>
								))
							}
						</tr>
					</thead>
					<tbody className='coinlist text-[10px] md:text-xs lg:text-sm border border-teal-950'>
							{paginatedCoins.map((coin:Coin, i:number) => {
									const {
										id,
										rank,
										icon,
										name,
										symbol,
										price,
										priceChange1d,
										marketCap
									} = coin;
									return (
										<tr className='border border-solid border-teal-950' key={i}>
											<td className="text-center p-2">{rank}</td>
											<td className='flex items-center justify-center py-1'>
												<div className='w-24 flex items-center py-1'>
													<Image width={12} height={12} src={icon} alt={name} className='w-[18px] h-[18px] md:w-5 md:h-5 lg:h-6 lg:w-6 rounded-full mr-2 sm:mr-3'/>
													<Link href={`/coins/${id}`} className='flex flex-col raleway'>
														<span className='leading-tight tracking-wider text-wrap'>{name}</span>
														<span className='font-thin'>{symbol}</span>
													</Link>
												</div>
											</td>
											<td className='text-center py-1'>${price.toPrecision(6)}</td>
											<td className={priceChange1d < 0 ? 'text-red-600 text-center py-1' : 'text-green-600 text-center py-1'}>{priceChange1d}%</td>
											<td className='text-center geistMono py-1'>${marketCap.toPrecision(13)}</td>
										</tr>
									)
								})
							}
					</tbody>
				</table>}
			</div>
			{(search === '' && paginatedCoins.length) && (<div className="flex justify-between items-center mt-2 py-4 px-6 md:px-10 coinlist w-full md:w-[95%] mx-auto border border-teal-950">
				<button
					disabled={currentPage === 1}
					onClick={() => setCurrentPage((prev) => prev - 1)}
					className="text-teal-800 text-xl md:text-2xl cursor-pointer"
				>
					<FaArrowAltCircleLeft />
				</button>
				<span className='text-xs md:text-sm'>
					Page {currentPage} of {totalPages}
				</span>
				<button
					disabled={currentPage === totalPages}
					onClick={() => setCurrentPage((prev) => prev + 1)}
					className="text-teal-800 text-xl md:text-2xl cursor-pointer"
				>
					<FaArrowAltCircleRight />
				</button>
			</div>)}
		</section>
	)
}

export default CoinsList;

