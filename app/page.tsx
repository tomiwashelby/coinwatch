import Hero from './components/Hero';
import CoinsList from './components/CoinsList';

export default async function Home() {
  const getCoins = async () => {
    try {
      const res = await fetch('https://openapiv1.coinstats.app/coins?limit=50', {
        method: 'GET',
        headers: {
          'X-API-KEY': 'AvUQcxPoOSa0Xvn9yuzHEpFcMqMin8QuvgMjptJkRHI=',
          'Accept': 'application/json'
        }
      });

      return res.json();
    }
    catch(error) {
      console.log(error);
    }
  };
  const data = await getCoins();
  const coins = data.result;
  
  return (
    <div className='bg-[url(/cryptohero.png)] bg-no-repeat'>
      <Hero/>
      <CoinsList coins={coins}/>
    </div>
  );
}
