'use client';

import React, { useState } from 'react';

function SearchPage() {
  const [searchStock, setSearchStock] = useState();
  const [stockData, setStockData] = useState();
  const [timeFrameState, setTimeFrameState] = useState();
  const [timeFrame, setTimeFrame] = useState();

  const handleTimeSeries = async (timeFrame) => {
    const searchStockWithExchange = `${searchStock}.BSE`;
    console.log('searchStockWithExchange', searchStockWithExchange);
    const getData = await fetch(
      // `https://www.alphavantage.co/query?function=${timeFrame}&symbol=${searchStock}&apikey=BPDE8EXUXQFR6GWH`,

      `https://www.alphavantage.co/query?function=${timeFrame}&symbol=${searchStockWithExchange}&outputsize=full&apikey=BPDE8EXUXQFR6GWH`,
      setTimeFrame(timeFrame),
    );

    const response = await getData.json();
    setTimeFrameState(
      response['Time Series (Daily)'] ||
        response['Weekly Time Series'] ||
        response['Monthly Time Series'],
    );
    setStockData(response);
  };

  const shareData = timeFrameState ? Object.entries(timeFrameState) : [];

  return (
    // <div>Search Page</div>
    <>
      <div className="flex flex-1 items-center justify-center">
        <p>{timeFrame}</p>
        <div className="w-full max-w-lg">
          <form className="sm:flex sm:items-center">
            <input
              id="q"
              name="q"
              className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter Stock Name"
              type="search"
              onChange={(e) => setSearchStock(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="my-7">
        <h1 className="text-3xl font-bold text-gray-800 mb-5 text-center">
          Select Time Frame
        </h1>
        <div className="container mx-auto my-8  flex flex-wrap justify-center">
          <button
            className="flex-shrink-0 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 py-2 px-4 bg-indigo-500 rounded text-white font-normal focus:outline-none focus:shadow-outline hover:bg-indigo-900"
            value="TIME_SERIES_DAILY"
            onClick={(e) => handleTimeSeries(e.target.value)}
          >
            &nbsp; Daily &nbsp;
          </button>

          <button
            className="flex-shrink-0 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 py-2 px-4 bg-indigo-500 rounded text-white font-normal focus:outline-none focus:shadow-outline hover:bg-indigo-900"
            value="TIME_SERIES_WEEKLY"
            onClick={(e) => handleTimeSeries(e.target.value)}
          >
            Weekly
          </button>

          <button
            className="flex-shrink-0 w-full sm:w-auto mb-2 sm:mb-0 py-2 px-4 bg-indigo-500 rounded text-white font-normal focus:outline-none focus:shadow-outline hover:bg-indigo-900"
            value="TIME_SERIES_MONTHLY"
            onClick={(e) => handleTimeSeries(e.target.value)}
          >
            Monthly
          </button>
        </div>
        <h1 className="text-1xl  text-gray-800 mb-5 text-center">
          {/* Time Frame :  &nbsp;<b>{timeFrame.slice(12,)}</b> */}
        </h1>
      </div>

      <span className="font-bold text-4xl text-center text-yellow-500">
        {stockData &&
          stockData['Meta Data'] &&
          stockData['Meta Data']['1. Information']}
      </span>

      <div className="p-5 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {shareData?.map(([date, dailyData]) => (
            <div
              key={date}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow shadow-lg p-3 my-2"
            >
              <div className="text-gray-700 flex-grow">
                <h2 className="text-gray-800 font-bold text-2xl text-center my-1">
                  {date.split('-').reverse().join('-')}
                </h2>
                <p className="text-base text-center">
                  Open:{' '}
                  <span className="font-semibold">{dailyData['1. open']}</span>
                </p>
                <p className="text-base text-center">
                  Close:{' '}
                  <span className="font-semibold">{dailyData['4. close']}</span>
                </p>
                <p className="text-base text-center">
                  High:{' '}
                  <span className="font-semibold text-red-500">
                    {dailyData['2. high']}
                  </span>
                </p>
                <p className="text-base text-center">
                  Low:{' '}
                  <span className="font-semibold">{dailyData['3. low']} $</span>
                </p>
                <p className="text-base text-center">
                  Volume:{' '}
                  <span className="font-semibold">
                    {dailyData['5. volume']}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
