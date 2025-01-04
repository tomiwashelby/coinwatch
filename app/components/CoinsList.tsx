'use client';
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Search from './Search';
import { useState } from 'react';

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

	return (
		<section className="px-20 flex flex-col items-center template pb-12" id='coinlist'>
			<Search value={search} onChange={handleSearch}/>
			<div className='sm:container mt-12 overflow-x-auto'>
				<table className='p-2 w-[465px] sm:w-full raleway shadow-xl rounded-xl border border-solid border-teal-900 border-collapse inter'>
					<thead>
						<tr>
							{
								tableHeads.map((tableHead:string, i:number) => (
									<th className='bg-teal-950 text-[10px] md:text-xs lg:text-sm  border border-solid border-teal-900 p-1 font-semibold' key={i}>{tableHead}</th>
								))
							}
						</tr>
					</thead>
					<tbody className='coinlist text-[10px] sm:text-[10px] md:text-xs lg:text-sm border border-solid border-teal-950'>
							{
								filteredCoins.map((coin:Coin, i:number) => {
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
												<div className='w-32 flex items-center py-1'>
													<Image width={12} height={12} src={icon} alt={name} className='w-[18px] h-[18px] md:w-5 md:h-5 lg:h-6 lg:w-6 rounded-full mr-2 sm:mr-3'/>
													<Link href={`/coins/${id}`} className='flex flex-col'>
														<span className='leading-tight tracking-wider'>{name}</span>
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
				</table>
			</div>
		</section>
	)
}

export default CoinsList;