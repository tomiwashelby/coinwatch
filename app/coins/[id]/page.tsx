import React from "react";
import Link from "next/link";
import Image from "next/image";

const Coin = async ({params}: {params:any}) => {
  const {id} = params;
  const getCoin = async () => {
    try {
      const res = await fetch(`https://openapiv1.coinstats.app/coins/${id}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': 'AvUQcxPoOSa0Xvn9yuzHEpFcMqMin8QuvgMjptJkRHI=',
          'Accept': 'application/json'
        }
      });

      return res.json();
    } catch (err) {
      console.log(err);
    }  
  };
  const coin = await getCoin();
  console.log(coin);
  return (
    <section className="raleway py-8 px-1">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 text-lg md:text-xl">
          <Image src={coin.icon} width={30} height={30} alt={coin.name} className="rounded-full"/>
          <div className="flex flex-col">
            <span>{coin.name}</span>
            <span className="text-sm md:text-md font-extralight">{coin.symbol}</span>
          </div>
        </div>
        <div className="px-2 py-4 w-full border border-solid border-teal-800 mt-5">
          <ul className="mb-1 p-3 flex flex-col gap-1">
            <li className="flex justify-between items-center pb-1 border-b border-b-teal-900">
              Price : <span className="inter text-xs md:text-sm font-light">${coin.price.toPrecision(6)}</span>
            </li>
            <li className="flex justify-between items-center pb-1 border-b border-b-teal-900">
              Rank : <span className="inter text-xs md:text-sm font-light">{coin.rank}</span>
            </li>
            <li className="flex justify-between items-center pb-1 border-b border-b-teal-900">
              Market Cap : <span className="inter text-xs md:text-sm font-light">${(coin.marketCap).toPrecision(13)}</span>
            </li>
            <li className="flex justify-between items-center pb-1 border-b border-b-teal-900">
              Total Supply : <span className="inter text-xs md:text-sm font-light">{coin.totalSupply}</span>
            </li>
          </ul>
          <ul className="p-3 flex flex-col gap-[6px]">
            <li className="flex justify-between items-center text-sm border-b border-b-teal-900 pb-[6px]">
              1H Change : <span className={coin.priceChange1h < 0 ? 'text-red-600 inter text-xs md:text-sm font-light' : coin.priceChange1h === 0 ? 'text-inherit' : 'text-green-600 inter text-xs md:text-sm font-light'}>{coin.priceChange1h}%</span>
            </li>
            <li  className="flex justify-between items-center text-sm border-b border-b-teal-900 pb-[6px]">
              24H Change : <span className={coin.priceChange1d < 0 ? 'text-red-600 inter text-xs md:text-sm font-light' : coin.priceChange1d === 0 ? 'text-inherit' : 'text-green-600 inter text-xs md:text-sm font-light'}>{coin.priceChange1d}%</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b border-b-teal-900 pb-[6px]">
              1W Change : <span className={coin.priceChange1W < 0 ? 'text-red-600 inter text-xs md:text-sm font-light' : coin.priceChange1W === 0 ? 'text-inherit' : 'text-green-600 inter text-xs md:text-sm font-light'}>{coin.priceChange1w}%</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b border-b-teal-900 pb-[6px]">
              Trading Volume : <span className="inter text-xs md:text-sm font-light">{coin.volume}</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b border-b-teal-900 pb-[6px]">
              Contract : <span className="inter text-xs md:text-sm font-light text-teal-600 truncate">{coin.contractAddress}</span>
            </li>
            <li className="flex justify-between items-center text-sm border-b border-b-teal-900 pb-[6px]">
              Decimals : <span className="inter text-md md:text-lg font-light text-teal-600">{coin.decimals}</span>
            </li>
            <li className="flex flex-col justify-between text-sm border-b border-b-teal-900 pb-[6px]">
              <span className="mb-2">Explorers :</span> {coin.explorers.map((explorer:string, i:number) => <span className="inter text-[11px] md:text-xs md:mb-1 truncate font-light text-teal-500 hover:text-teal-600" key={i}><Link href={explorer}>{explorer}</Link></span>)}
            </li>
            <li className="flex justify-between items-center text-sm">
              Website : <span className="inter text-xs md:text-sm font-light text-teal-500 hover:text-teal-600">
                <Link target="_blank" href={coin.websiteUrl}>{(coin.websiteUrl).replace("http://www.", "").replace("https://www.", "").replace("https://", "").replace("/", "")}</Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Coin;
