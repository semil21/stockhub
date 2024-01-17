import React from 'react';

const getTopGainer = async () => {
  const getData = await fetch(
    'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo',
  );

  const gainersData = await getData.json();
  return gainersData;
};

const Trendings = async () => {
  const newData = await getTopGainer();
  return (
    <>

        <span className="font-bold text-4xl text-center text-green-500">
        Today's Top Gainers
      </span>
      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {newData?.top_gainers?.slice(0, 8)?.map((value, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3"
            >
              {value ? (
                <div className="text-gray-700 flex-grow">
                  <h2 className="text-gray-800 font-bold text-2xl text-center my-1">
                    {value.ticker}
                  </h2>
                  <p className="text-base">
                    Change Amount :{' '}
                    <span className="font-semibold">{value.change_amount}</span>
                  </p>
                  <p className="text-base">
                    Change in Percent :{' '}
                    <span className="font-semibold text-green-500">
                      {parseFloat(value.change_percentage).toFixed(2)}
                    </span>
                  </p>
                  <p className="text-base">
                    Price :{' '}
                    <span className="font-semibold">{value.price} $</span>{' '}
                  </p>
                  <p className="text-base">
                    Volume :{' '}
                    <span className="font-semibold">{value.volume}</span>
                  </p>
                </div>
              ) : (
                <p>This Project uses free API which has 25</p>
              )}
            </div>
          ))}
        </div>
      </div>

          
      <span className="font-bold text-4xl text-center text-yellow-500">
        Most Actively Traded
      </span>
      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {newData?.top_gainers?.slice(0, 8)?.map((value, index) => (
            <div
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3"
            >
              <div className="text-gray-700 flex-grow">
                <h2 className="text-gray-800 font-bold text-2xl text-center my-1">
                  {value.ticker}
                </h2>
                <p className="text-base">
                  Change Amount :{' '}
                  <span className="font-semibold ">{value.change_amount}</span>
                </p>
                <p className="text-base">
                  Change in Percent :{' '}
                  <span className="font-semibold text-yellow-500">
                    {parseFloat(value.change_percentage).toFixed(2)}
                  </span>
                </p>
                <p className="text-base">
                  Price : <span className="font-semibold">{value.price} $</span>{' '}
                </p>
                <p className="text-base">
                  Volume : <span className="font-semibold">{value.volume}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trendings;
