"use client";
import Hero from './components/Hero';
import CoinsList from './components/CoinsList';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

interface Coins {
  id: string;
  rank: number;
  icon: string;
  name: string;
  symbol: string;
  price: number;
  priceChange1d: number;
  marketCap: number;
}

interface ApiResponse {
  result: Coins[];
}

export default function Home() {
  const [coins, setCoins] = useState<Coins[]>([]);
  const [loading, setLoading] = useState(true);
  let ws = new WebSocket('');
  const url = 'https://api.pro.coinbase.com';

  const getCoins = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://openapiv1.coinstats.app/coins?limit=1000&cache_bust=' + new Date().getTime(), {
        method: 'GET',
        headers: {
          'X-API-KEY': 'AvUQcxPoOSa0Xvn9yuzHEpFcMqMin8QuvgMjptJkRHI=',
          'Accept': 'application/json'
        }
      });

      const data: ApiResponse = await res.json();
      setCoins(data.result);
    }
    catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoins();
    const intervalId = setInterval(getCoins, 600000);
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className='bg-[url(/cryptohero.png)] bg-no-repeat bg-cover'>
      <Hero/>
      <CoinsList coins={coins} loading={loading}/>
      <Footer/>
    </div>
  );
}
